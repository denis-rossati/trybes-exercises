let n = 11;

let asterisc = "*";

let spaces = " ";

let asteriscStorage = "*";

let asteriscLine = "";

if ((n % 2) == 0){
    n = n + 1;
}

for (let a = 0; a < n; a += 2){

    for (let b = a; b < n; b += 2){
        asteriscLine += spaces;

    }
    
    console.log (asteriscLine + asteriscStorage)
    asteriscStorage += asterisc + asterisc;
    asteriscLine = "";
}

