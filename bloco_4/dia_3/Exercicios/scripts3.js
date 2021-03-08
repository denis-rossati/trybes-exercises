let n = 5;

let asterisc = "*";

let space = " ";

let asteriscStorage = "";

let asteriscLine = "";

for (let a = 0; a < n; a += 1){

    for (let c = 4; c > a; c -= 1){
        asteriscLine += space;
    }

    asteriscStorage += asterisc;
    asteriscLine += asteriscStorage;
    console.log (asteriscLine);
    asteriscLine = "";
}

