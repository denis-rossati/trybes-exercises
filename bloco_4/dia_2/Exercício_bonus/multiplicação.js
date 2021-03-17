let n = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let m = [];
let b = 1;

for (let a = 0; a < n.length;){

    let o = (n[a]*n[b]);

    if (b!=10){

        m.push (o);

    } else {

        m.push (n[a]*2);

    }

    b = b + 1;
    a++
}

console.log (m);
