#!/bin/bash

FILE=dev/pid.txt
if ! test -f "$FILE"; then
    exit 0
fi

PID=$(cat $FILE)
if ps -p $PID > /dev/null
then
    kill -s USR1 $PID
fi