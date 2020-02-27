function minimumAbsoluteDifference(arr) {
    
    let len = arr.length;
    arr.sort((a,b)=>a-b);
    let minAbs = Math.abs(arr[0]-arr[1]);
    for(let i = 1 ; i<len-1 ;i++){
        if(Math.abs(arr[i]-arr[i+1])< minAbs){
            minAbs = Math.abs(arr[i]-arr[i+1]);
        }

    }
    return minAbs;
}