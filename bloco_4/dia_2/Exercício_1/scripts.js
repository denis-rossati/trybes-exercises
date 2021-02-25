let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i<numbers.length;){
    console.log (numbers[i]);
    i++;
}

//----- 

let results= 0;
let media = 0;

for (let i = 0; i<numbers.length;){
    results= results + numbers[i];
    i++;
}

//----- 

media = (results/numbers.length);

if (media>20) {
    console.log ("Valor é maior que 20.");
} else {
    console.log ("Valor é menor que 20.");
}

//----- 

let numOrdenados = numbers.sort();

console.log (numOrdenados[0]);

//-----

let impar = [];
let a = 0;

for (let c = 0; c < numbers.length; c++){

    a = ((numbers[c]) % 2);

    if (a>0) {
        impar.push(numbers[c]);
    } else {
        console.log ((numbers[c]) + " não é um número ímpar");
    }

}
if (impar.length>0){
    console.log (impar);
} else {
    console.log ("não foram encontrados valores impares");
}

//-----

let teste = numbers[1];

for (let i = 0; i < numbers.length; i++){

    if (teste<numbers[i]) {
        teste=teste;
    } else {
        teste = numbers[i];
    }

}

console.log (teste);

//-----

let array125 = [];

for (let i = 1; i<=25; i++){
    array125.push(i);
}

console.log (array125);

//-----

let divisao = [];

for (let i = 0; i < array125.length; i++){

    divisao.push((array125[i])/2);
    console.log ( array125[i]+"/2 = "+divisao[i]);
}
//-----
