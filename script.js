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

const biggestWord = string => {
  let arrayWords = string.split(' ');
  let sizeWord = arrayWords[0];;
  for (let x = 0; x < arrayWords.length; x += 1) {
    if(sizeWord.length < arrayWords[x].length) {
      sizeWord = arrayWords[x];
    }

    console.log(sizeWord);
  }
}
const activeButton = () => {
  const botao = document.getElementById('botao');
  const contador = document.getElementById('contador');
  localStorage.clicadas == undefined ? localStorage.clicadas = 0 : console.log('de boa');
  contador.innerText = (localStorage.clicadas);
  let clickCounter = Number(localStorage.clicadas);
  botao.addEventListener('click', () => {
    contador.innerText = clickCounter += 1
    localStorage.clicadas = Number(contador.innerText);
  });
} 
biggestWord("Antônio foi no banheiro e não sabemos o que aconteceu");
fatorialNumber(5);
activeButton();
*/

let stringSkills = ['HTML;' , 'CSS;' , 'JavaScript;' , 'Paginas Responsivas;' , 'Bootstrap;'];

const stringFunction = string => {
  let stringX = "Tryber x aqui!"
  let stringArray = stringX.split('x')
  let stringComplete = `${stringArray[0]}${string}${stringArray[1]}`
  return stringComplete;
}
const stringLiteral = string => {
  let stringSort = stringSkills.sort();
  for(let x = 0; x < stringSkills.length; x += 1) {
    stringSkills[x] += '\n';
  }
  let novaString = ` ${string}\n Minhas cinco principais habilidades são:\n ${stringSort.join(' ')} #GoTrybe`
  return novaString;
}
stringLiteral(stringFunction('Denis'));
