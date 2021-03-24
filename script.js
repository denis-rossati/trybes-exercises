/* const fatorialNumber = number => {
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
fatorialNumber(5); */

/* const biggestWord = string => {
  let arrayWords = string.split(' ');
  let sizeWord = arrayWords[0];;
  for (let x = 0; x < arrayWords.length; x += 1) {
    if(sizeWord.length < arrayWords[x].length) {
      sizeWord = arrayWords[x];
    }

    console.log(sizeWord);
  }
}
biggestWord("Antônio foi no banheiro e não sabemos o que aconteceu") */
/* 
const botao = document.getElementById('botao');
const contador = document.getElementById('contador');
localStorage.clicadas == undefined ? localStorage.clicadas = 0 : console.log('de boa');
contador.innerText = (localStorage.clicadas);
let clickCounter = Number(localStorage.clicadas);
botao.addEventListener('click', () => {
  contador.innerText = clickCounter += 1
  localStorage.clicadas = Number(contador.innerText);
}); */

const stringFunction = string => { }
