#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NO_COLOR='\033[0m'

API_URL="http://localhost:3001/api/time"

fetch_data() {
    curl -s "$API_URL"
}

display_timer() {
    local timer_data=$1
    local timer_index=$2
    
    start_time_ms=$(echo "$timer_data" | jq -r '.startDate' | xargs -I {} date -d "{}" +%s)000
    goal_ms=$(echo "$timer_data" | jq -r '.goal')
    label=$(echo "$timer_data" | jq -r '.label')
    
    current_time_ms=$(date +%s)000
    
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
    printf "${CYAN}=== Timer %d (%s) ===${NO_COLOR}\n" $timer_index "$label"
    echo ""
    
    # Display the information with colors
    printf "${RED}%d${NO_COLOR} days, ${GREEN}%02d${NO_COLOR} hours, ${YELLOW}%02d${NO_COLOR} minutes, ${BLUE}%02d${NO_COLOR} seconds\n" \
        $days $hours $minutes $seconds
    echo ""
    printf "${MAGENTA}%.2f%%${NO_COLOR}\n" $percentage
    echo ""
    
    # Create a simple progress bar with color based on percentage
    bar_length=100
    filled_length=$(awk "BEGIN {printf \"%.0f\", ($percentage / 100) * $bar_length}")
    
    # Choose color based on percentage
    if (( $(echo "$percentage < 25" | bc -l) )); then
        BAR_COLOR=$RED
    elif (( $(echo "$percentage < 50" | bc -l) )); then
        BAR_COLOR=$YELLOW
    elif (( $(echo "$percentage < 75" | bc -l) )); then
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
    response=$(fetch_data)
    
    while true; do
        clear
        
        # Get the number of timers in the array
        timer_count=$(echo "$response" | jq '. | length')
        
        # Display each timer
        for ((i=0; i<$timer_count; i++)); do
            timer_data=$(echo "$response" | jq -c ".[$i]")
            display_timer "$timer_data" $((i + 1))
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

show_progress