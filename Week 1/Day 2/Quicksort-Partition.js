'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the quickSort function below.
function quickSort(arr) {
    let pivot = arr[0];
    let start = 0;
    let end = arr.length -1 ;
    
    while(start<end){
        while(arr[start]<=pivot){
            start++;
        }
        while(arr[end]>pivot){
            end -- ;
        }
        if(end>=start){
            swap(arr,start,end)
        }
        else{
            swap(arr,0,end)
        }
    }
    return arr;


}

function swap(arr,a,b){
    let temp = arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = quickSort(arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}