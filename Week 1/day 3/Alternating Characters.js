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

// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
let arr = [];
    let len = s.length;
    let charDelete = 0;
    
    for(let i=0 ; i<len ; i++){
        if(arr.length==0){
            arr.push(s[i]);
            continue;
        }
        if(s[i]==arr[arr.length-1]){
            arr.pop();
            arr.push(s[i]);
            charDelete++;
        }
        else{
            arr.push(s[i])
        }
    }
    return charDelete;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = alternatingCharacters(s);

        ws.write(result + "\n");
    }

    ws.end();
}
