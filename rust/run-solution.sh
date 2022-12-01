#!/usr/bin/bash
# Runs the solution for the given day

cd rust
set -e

if (( $# != 1 )); then
    echo "Usage: $0 <day-number>"
    exit 1
fi

if [[ ! -d solutions/solution-$1 ]]; then
    echo "No solution found for day $1"
    exit 1
fi

cd solutions/solution-$1
cargo run