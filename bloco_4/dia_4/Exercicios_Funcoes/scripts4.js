function biggestName (arrayOfNames){
//essa variavel vai receber o nome a ser processado no array
let actualName = "";

//essa variavel vai receber o numero de letras de um nome
let numberOfLetters = 0;

//essa variavel vai carregar o numero de letras a ser comparado
let numberOfLettersComparison = 0;

//essa variavel vai carregar o maior nome atual e defino um nome qualquer para ser comparado inicialmente
let actualBiggestName = arrayOfNames[0];

//esse for vai percorrer por cada nome do array
for (let arrayCounter = 0; arrayCounter < arrayOfNames.length; arrayCounter += 1){
  
  //aqui o nome sera armazenado para ser processado em outro contador
  actualName = arrayOfNames[arrayCounter];
  
  //esse contador vai percorrer por cada letra do array
  for (let nameCounter = 0; nameCounter < actualName.length; nameCounter += 1){

    //a cada letra será adicionado um valor aqui para contar as letras.
    numberOfLetters += 1;
  }

    //aqui são feitas as comparações
    if (actualName.length > actualBiggestName.length){

      actualBiggestName = actualName;
    }

  numberOfLetters = 0;
}  
//aqui o resultado é exibido.
console.log (actualBiggestName + " é o maior nome do array.")
}

biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);