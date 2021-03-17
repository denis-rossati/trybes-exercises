let salario = 3000;
let aliquota = 0 ;

if (salario<=1556.94){
    salario = (((salario*92)/100));
}
else if (salario>1556.94 && salario<2594.92){
    salario = (((salario*91)/100));
} 
else if (salario>2594.92 && salario < 5189.82){
    salario = (((salario*89)/100));
}
else if (salario > 5189.82) {
    salario = ((salario-570.88));
}
else {
    console.log ("digite um valor positivo")
}

if (salario > 1903 && salario < 2856.65) {
    aliquota = (((salario*7.5)/100-142.8));
}
else if (salario > 2826.66 && salario < 3751.05) {
    aliquota = (((salario*15)/100-354.8));
}
else if (salario > 3751.06 && salario < 4664.68) {
    aliquota = (((salario*22.5)/100-636.13))
}
else if (salario > 4664.68) {
    aliquota= (((salario*27.5)/100-869.36))
}

console.log (salario-aliquota)
