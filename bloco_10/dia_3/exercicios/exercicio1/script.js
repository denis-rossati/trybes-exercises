const randomNumber = () => Math.random() * 100;

const uppercase = (str) => str.toUpperCase();

const firstLetter = (str) => str[0];

const concatStr = (a, b) => `${a}${b}`; 

module.exports = { 
  randomNumber,
  uppercase,
  firstLetter,
  concatStr,
}