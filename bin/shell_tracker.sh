#!/bin/bash

API_URL="https://drewj.dev/api/time"

fetch_data() {
    curl -s "$API_URL"
}

show_progress() {
    response=$(fetch_data)
    
    start_time_ms=$(echo "$response" | jq -r '.time')
    goal_ms=$(echo "$response" | jq -r '.goal')
    
    while true; do
        clear
        
        current_time_ms=$(date +%s)000
        
        # Calculate elapsed time in milliseconds
        elapsed_ms=$((current_time_ms - start_time_ms))
        
        # Calculate percentage completion
        if [ $goal_ms -gt 0 ]; then
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
        
        # Display the information
        printf "%d days, %02d hours, %02d minutes, %02d seconds\n" \
            $days $hours $minutes $seconds
        echo ""
        printf "%.2f%%\n" $percentage
        echo ""
        
        # Create a simple progress bar
        bar_length=100
        filled_length=$(awk "BEGIN {printf \"%.0f\", ($percentage / 100) * $bar_length}")
        
        printf "["
        for ((i=0; i<$bar_length; i++)); do
            if [ $i -lt $filled_length ]; then
                printf "█"
            else
                printf " "
            fi
        done
        printf "]\n"
        
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