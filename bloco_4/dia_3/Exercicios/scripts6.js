let n = 5;

let a;

let b = [];

for (let x = 2; x < n; x += 1){

    a = n%x;
    
    if (a == 0){
        b.push (a);
    }
}

if ((b.length) > 0){
    console.log ("não é um número primo")
} else {
    console.log ("é um número primo")
}