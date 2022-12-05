#!/usr/bin/bash

cd rust
set -e

if (( $# != 1 )); then
    echo "Usage: $0 <day-number>"
    exit 1
fi

cargo init solutions/solution-$1

read -p "Open in vscode? (y/n) " -n 1 -r

if [[ $REPLY =~ ^[Yy]$ ]]
then
    code solutions/solution-$1
fi
