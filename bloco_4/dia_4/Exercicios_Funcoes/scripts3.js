function lowestNumber(arrayOfNumbers){

  let lowestNumberIndice = 0;

  let numberForTests = arrayOfNumbers[0];

  for (let counter = 0; counter < arrayOfNumbers.length; counter += 1){

    if ( (arrayOfNumbers[counter]) < numberForTests){

      numberForTests = arrayOfNumbers[counter];

      lowestNumberIndice = [counter];

    }
  }
    console.log ("o menor numero fica no indice: " + lowestNumberIndice);
}
lowestNumber([2, 3, 10, 512, 13, 1]);
