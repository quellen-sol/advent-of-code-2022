#!/usr/bin/env bash

cd ts
rm -rf dist/$1
set -e

if (( $# != 1 )); then
    echo "Usage: $0 <day-number>"
    exit 1
fi

if [[ ! -d src/$1 ]]; then
    echo "No solution found for day $1"
    exit 1
fi

tsc
node dist/$1/index.js
echo "Finished running solution for day $1"