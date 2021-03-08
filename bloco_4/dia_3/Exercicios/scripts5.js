let n = 8;

let asterisc = "*";

let spaces = " ";

let asteriscStorage = "*";

let spacesPiramid = "";

let spacesStorage = " ";

let asteriscLine = "";


if ((n % 2) == 0){
    n = n + 1;
}


for (let a = 0; a < n; a +=2){
    
    for (let b = a; b < n; b +=2){

        spacesStorage += spaces; 
    }


    for (let c = 1; c < a; c += 1){

        spacesPiramid += spaces;

    }

    if (a >= n-1){

        for (let x = 1; x < n; x += 1){

            asteriscStorage += asterisc;
        }
        console.log (spacesStorage + asteriscStorage)   

    }

    if (a > 0 && a < n-1) {

        console.log (spacesStorage + asterisc + spacesPiramid + asterisc);
    
    } else  if (a< n-1){

        spacesStorage = "";

        for (let k = 0; k < n; k += 2){
            spacesStorage+= spaces;
        }

        console.log (spacesStorage + asterisc);
    }


    spacesStorage = "";
    spacesPiramid = "";
}
