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

function countA(s , lb, ub){
    let count=0;
    for(let i = lb ; i<ub ; i++){
        if(s[i]=="a"){
            count++;
        }
    }
    return count;
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    if(s.length==1 && s[0]=="a"){
        return n;
    }
    
    let repeat = parseInt(n/s.length);
    let remain = n%(s.length);
    return(repeat*countA(s,0,s.length))+countA(s,0,remain);


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
