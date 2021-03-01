function lowestNumber(arrayOfNumbers){

  let lowestNumberIndice = arrayOfNumbers[0];

  for (let counter = 1; counter < arrayOfNumbers.length; counter += 1){

    if (lowestNumberIndice < (arrayOfNumbers[counter])){
      lowestNumberIndice = counter;

    }
  }
    console.log ("o menor numero fica no indice: " + lowestNumberIndice);
}

lowestNumber([2, 3, 6, 7, 10, 1, 28]);
