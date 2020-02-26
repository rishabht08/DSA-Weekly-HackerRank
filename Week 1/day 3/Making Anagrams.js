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

// Complete the makingAnagrams function below.
function makingAnagrams(s1, s2) {
    let count = 0;
    let map1 = new Map();
    let map2 = new Map();
    for(let i = 0 ;i<26 ; i++){
        map1.set(i,0);
        map2.set(i,0);
    }
    let len1 = s1.length;
    let len2 = s2.length;
    for(let i =0 ; i<len1 ; i++){
        map1.set(s1[i].charCodeAt(0)-97 , map1.get(s1[i].charCodeAt(0)-97)+1);
        
    }
    for(let i =0 ; i<len2 ; i++){
        map2.set(s2[i].charCodeAt(0)-97 , map2.get(s2[i].charCodeAt(0)-97)+1);
        
    }
    for(let i =0 ; i<26 ; i++){
        count+=Math.abs((map1.get(i)-map2.get(i)))
    }
    
    return count;
    


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    let result = makingAnagrams(s1, s2);

    ws.write(result + "\n");

    ws.end();
}
