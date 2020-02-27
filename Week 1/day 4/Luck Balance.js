function luckBalance(k, contests) {
    let luck = 0;
    let len = contests.length;
    let prod = [];
    let countOne=0;
    for(let i= 0 ; i<len ; i++){
        prod[i] = contests[i][0]*contests[i][1]

    }
    prod.sort((a, b) => b - a);
    for(let i =0 ; i<len ; i++){
        if(countOne<k){
        luck+=prod[i];
        countOne++;
        }
        else{
            luck-=prod[i]
        }
    }
    for(let i =0 ; i<len ; i++){
        if(contests[i][1]==0){
            luck+=contests[i][0];
        }
    }

    return luck;


}