function moda(arrayNumbers){
//variavel onde irei inserir quantas vezes um numero se repete
let appearNumber = 0;

//aqui armazeno quantas vezes o numero com mais aparecimentos apareceu
let appearedNumber = 0;

//armazena qual o numero aparece mais vezes
let modaNumber = 0;

//pega cada numero do array para comparar
for (let counter1 = 0; counter1 < arrayNumbers.length; counter1 += 1){

  //é numero que será comparado com o numero do contador acima
  for (let counter2 = 0; counter2 < arrayNumbers.length; counter2 += 1){
    
    //estrutura que realizara a comparação
    if (arrayNumbers[counter1] === arrayNumbers[counter2]){
      //armazeno o numero de vezes que o numero irá se repetir
      appearNumber += 1;    
    }
  }
  if (appearedNumber < appearNumber){
    appearedNumber = appearNumber;
    modaNumber = arrayNumbers[counter1]
  }
  appearNumber = 0;
}
console.log (modaNumber);
}

moda ([2, 3, 2, 5, 8, 2, 3,]);