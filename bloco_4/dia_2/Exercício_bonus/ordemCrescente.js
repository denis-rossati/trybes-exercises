let n = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

for (let a = 1; a < n.length; a++){

    for (let b = 0; b< n.length; b++){

        if (n[a] < n[b]){

            let c = n[a];

            n[a] = n[b];
            n[b] = c;

        }

    }


}
console.log("A ordem crescente é:" + n)