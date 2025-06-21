#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NO_COLOR='\033[0m'

API_URL="https://drewj.dev/api/time"

fetch_data() {
    curl -s "$API_URL"
}

display_timer() {
    local timer_data=$1
    local timer_index=$2
    
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
    
    # Display timer header with label
    printf "${CYAN}=== ${label} ===${NO_COLOR}\n"
    
    # Display the information with colors
    printf "${RED}%d${NO_COLOR} days, ${GREEN}%02d${NO_COLOR} hours, ${YELLOW}%02d${NO_COLOR} minutes, ${BLUE}%02d${NO_COLOR} seconds\n" \
        $days $hours $minutes $seconds
    printf "${MAGENTA}%.2f%%${NO_COLOR}\n" $percentage
    
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
    
    printf "["
    for ((i=0; i<$bar_length; i++)); do
        if [ $i -lt $filled_length ]; then
            printf "${BAR_COLOR}█${NO_COLOR}"
        else
            printf " "
        fi
    done
    printf "]\n"
    echo ""
}

show_progress() {
    while true; do
        clear
        
        # Fetch data inside the loop to get updates
        response=$(fetch_data)
        
        # Check if we got a valid response
        if [ -z "$response" ] || [ "$response" = "null" ]; then
            echo "Error: Unable to fetch data from API"
            sleep 5
            continue
        fi
        
        # Get the number of timers in the array
        timer_count=$(echo "$response" | jq '. | length' 2>/dev/null)
        
        # Check if jq parsing was successful
        if [ -z "$timer_count" ] || [ "$timer_count" = "null" ]; then
            echo "Error: Invalid response format"
            sleep 5
            continue
        fi
        
        
        # Display each timer
        for ((j=0; j<$timer_count; j++)); do
            timer_data=$(echo "$response" | jq -c ".[$j]")
            display_timer "$timer_data" $((j + 1))
        done
        
        sleep 1
    done
}

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


# Run the main function
show_progress