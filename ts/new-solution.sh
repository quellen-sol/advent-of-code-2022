#!/usr/bin/bash

cd ts
set -e

if (( $# != 1 )); then
    echo "Usage: $0 <day-number>"
    exit 1
fi

mkdir src/$1
touch src/$1/index.ts
echo "Created ./src/$1/index.ts"