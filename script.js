const fatorialNumber = number => {
  let arrayNumbers = [];
  let result = 1;
  for (let counter = 1; counter <= number; counter +=1) {
    arrayNumbers.push(counter)
  }
  for (let x = arrayNumbers.length -1; x > 0; x -= 1) {
    let tempStore;
    tempStore = result * arrayNumbers[x];
    result = tempStore;
  }
  return result;
}

fatorialNumber(5);