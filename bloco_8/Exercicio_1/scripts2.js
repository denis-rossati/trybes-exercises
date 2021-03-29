const returnRandomNumber = () => {
  let randomNumber = Math.ceil(Math.random() * (5 - 0.1) + 0.1);
  return randomNumber;
}

const compareNumbers = (number, random) => {
  let validate = (number === random);
  return validate ? 'Parabéns' : 'Tente Novamente'
}

console.log(compareNumbers(5, returnRandomNumber()))