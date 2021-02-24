let valor = 100 ;
let custo = 200 ;
let valorImposto = ((custo*80)/100);
let numVendas= 1000;
let thousand = (numVendas*valorImposto);

if (valor <= 0 || custo <= 0 || valorImposto <= 0 || numVendas <= 0 || thousand <= 0) {
    console.log ("erro, uma de suas entradas é menor que zero.");
} else {
    console.log (thousand);
}