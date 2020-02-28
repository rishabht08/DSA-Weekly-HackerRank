/ Complete the caesarCipher function below.
function caesarCipher(s, k) {

let str = s.split("");
    let len = str.length;
    let x = k%26;
    for(let i=0 ; i<len ;i++){
        let char = str[i].charCodeAt(0)
        if(char>=65 && char<=90){
            if(char+x>90){
                str[i]=String.fromCharCode((char+x-90+64));
            }
            else{
                str[i]= String.fromCharCode(char+x);
            }

        }
        else if(char>=97 && char<=122){
            if(char+x>122){
                str[i]=String.fromCharCode((char+x-122+96));
            }
            else{
                str[i]= String.fromCharCode(char+x);
            }

        }
    }

    return str.join("");

}