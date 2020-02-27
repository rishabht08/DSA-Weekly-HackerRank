function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let map1 = new Map();
    let addChar = 0;
    let k = 0;
    for (let i = 0; i < n; i++) {
        if (password[i].charCodeAt(0) >= 97 && password[i].charCodeAt(0) <= 122) {
            if (!map1.has("a")) {
                map1.set("a", i)
                k++;
                continue;
            }
        }
        if (password[i].charCodeAt(0) >= 65 && password[i].charCodeAt(0) <= 90) {
            if (!map1.has("A")) {
                map1.set("A", i);
                k++;
                continue;
            }
        }
        if (password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57) {
            if (!map1.has("0")) {
                map1.set("0", i);
                k++;
                continue;
            }
        }
        if (password[i] == "!" || password[i] == "@" || password[i] == "#" || password[i] == "$" || password[i] == "%" || password[i] == "^" || password[i] == "&" || password[i] == "*" || password[i] == "(" || password[i] == ")" || password[i] == "-" || password[i] == "+") {
            if (!map1.has("@")) {
                map1.set("@", i);
                k++;
                continue;
            }
        }
    }
   
    
    if (k < 4) {
        addChar = 4 - k;
    }
    if (n + addChar < 6) {
        let extra= addChar;
        addChar += (6 - (n+extra))

    }
    return addChar;
}