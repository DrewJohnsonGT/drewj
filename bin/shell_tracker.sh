#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NO_COLOR='\033[0m'

API_URL="https://www.drewj.dev/api/time"

# Terminal capabilities
LINES=$(tput lines)
COLS=$(tput cols)

# Global variable to store the API response
TIMER_DATA=""

fetch_data() {
    curl -s "$API_URL"
}

display_timer() {
    local timer_data=$1
    local timer_index=$2
    local line_offset=$3
    
    # Parse the JSON data
    start_date=$(echo "$timer_data" | jq -r '.startDate')
    goal_ms=$(echo "$timer_data" | jq -r '.goal')
    label=$(echo "$timer_data" | jq -r '.label')
    
    # Convert ISO date to epoch timestamp in milliseconds
    start_time_ms=$(gdate -d "$start_date" +%s%3N)
    current_time_ms=$(gdate +%s%3N)
    
    # Calculate elapsed time in milliseconds
    elapsed_ms=$((current_time_ms - start_time_ms))
    
    # Calculate percentage completion
    if [ $goal_ms -ne 0 ]; then
        percentage=$(awk "BEGIN {printf \"%.2f\", ($elapsed_ms / $goal_ms) * 100}")
    else
        percentage=0
    fi
    
    # Convert elapsed milliseconds to days, hours, minutes, seconds
    elapsed_seconds=$((elapsed_ms / 1000))
    days=$((elapsed_seconds / 86400))
    hours=$(((elapsed_seconds % 86400) / 3600))
    minutes=$(((elapsed_seconds % 3600) / 60))
    seconds=$((elapsed_seconds % 60))
    
    # Create a simple progress bar with color based on percentage
    bar_length=40
    filled_length=$(awk "BEGIN {printf \"%.0f\", ($percentage / 100) * $bar_length}")
    
    # Ensure filled_length doesn't exceed bar_length
    if [ $filled_length -gt $bar_length ]; then
        filled_length=$bar_length
    fi
    
    # Choose color based on percentage
    if (( $(awk "BEGIN {print ($percentage < 25)}") )); then
        BAR_COLOR=$RED
    elif (( $(awk "BEGIN {print ($percentage < 50)}") )); then
        BAR_COLOR=$YELLOW
    elif (( $(awk "BEGIN {print ($percentage < 75)}") )); then
        BAR_COLOR=$GREEN
    else
        BAR_COLOR=$CYAN
    fi
    
    # Position cursor and display timer header
    tput cup $line_offset 0
    tput el  # Clear to end of line
    printf "${CYAN}=== ${label} ===${NO_COLOR}"
    
    # Display the time information
    tput cup $((line_offset + 1)) 0
    tput el
    printf "${RED}%d${NO_COLOR} days, ${GREEN}%02d${NO_COLOR} hours, ${YELLOW}%02d${NO_COLOR} minutes, ${BLUE}%02d${NO_COLOR} seconds" \
        $days $hours $minutes $seconds
    
    # Display percentage
    tput cup $((line_offset + 2)) 0
    tput el
    printf "${MAGENTA}%.2f%%${NO_COLOR}" $percentage
    
    # Display progress bar
    tput cup $((line_offset + 3)) 0
    tput el
    printf "["
    for ((i=0; i<$bar_length; i++)); do
        if [ $i -lt $filled_length ]; then
            printf "${BAR_COLOR}█${NO_COLOR}"
        else
            printf " "
        fi
    done
    printf "]"
    
    # Empty line for spacing
    tput cup $((line_offset + 4)) 0
    tput el
}

cleanup() {
    # Show cursor and clear screen on exit
    tput cnorm  # Show cursor
    tput clear
    exit 0
}

initialize_data() {
    echo "Fetching timer data..."
    
    # Fetch data once
    TIMER_DATA=$(fetch_data)
    
    # Check if we got a valid response
    if [ -z "$TIMER_DATA" ] || [ "$TIMER_DATA" = "null" ]; then
        echo "Error: Unable to fetch data from API"
        exit 1
    fi
    
    # Validate the response format
    timer_count=$(echo "$TIMER_DATA" | jq '. | length' 2>/dev/null)
    if [ -z "$timer_count" ] || [ "$timer_count" = "null" ] || [ "$timer_count" -eq 0 ]; then
        echo "Error: Invalid response format or no timers found"
        exit 1
    fi
    
    echo "Successfully loaded $timer_count timer(s)"
    sleep 1
}

show_progress() {
    # Set up signal handlers for clean exit
    trap cleanup EXIT INT TERM
    
    # Initialize terminal
    tput civis  # Hide cursor
    tput clear  # Clear screen once
    
    # Get the number of timers
    timer_count=$(echo "$TIMER_DATA" | jq '. | length')
    
    while true; do
        # Save cursor position
        tput sc
        
        # Display each timer using the stored data
        for ((j=0; j<$timer_count; j++)); do
            timer_data=$(echo "$TIMER_DATA" | jq -c ".[$j]")
            # Each timer takes 5 lines
            display_timer "$timer_data" $((j + 1)) $((j * 5))
        done
        
        # Display status line at the bottom
        bottom_line=$((timer_count * 5))
        tput cup $bottom_line 0
        tput el
        
        # Restore cursor position
        tput rc
        
        sleep 1
    done
}

# Check if tput is available
if ! command -v tput &> /dev/null; then
    echo "Error: tput is required but not installed."
    echo "tput is usually part of ncurses package."
    exit 1
fi

# Check if jq is installed
if ! command -v jq &> /dev/null; then
    echo "Error: jq is required but not installed."
    echo "Please install it using:"
    echo "  - On Ubuntu/Debian: sudo apt-get install jq"
    echo "  - On macOS: brew install jq"
    echo "  - On CentOS/RHEL: sudo yum install jq"
    exit 1
fi

# Check if curl is installed
if ! command -v curl &> /dev/null; then
    echo "Error: curl is required but not installed."
    echo "Please install curl and try again."
    exit 1
fi

# Check if gdate is available (macOS)
if ! command -v gdate &> /dev/null; then
    echo "Error: gdate is required on macOS."
    echo "Please install it using: brew install coreutils"
    exit 1
fi

# Initialize data once at startup
initialize_data

# Run the main function
show_progress