function lowestNumber(arrayOfNumbers){

  let biggestNumberIndice = 0;

  let numberForTests = arrayOfNumbers[0];

  for (let counter = 0; counter < arrayOfNumbers.length; counter += 1){

    if (numberForTests < (arrayOfNumbers[counter])){

      numberForTests = arrayOfNumbers[counter];

      biggestNumberIndice = [counter];

    }
  }
    console.log ("o maior numero fica no indice: " + biggestNumberIndice);
}
lowestNumber([2, 3, 10, 512, 13, 17]);
