
invertWords ("arara")

function invertWords(word){
  let wordArray= [];

  let wordArrayUpsideDown= [];

  let verificator = (0);

  let verificator2 = (0);

  //constroi o array com os caracteres das palavras
  for (let x = 0; x < word.length; x += 1){
    wordArray.push (word[x]);
  }

  //constroi um array com os caracteres das palavras mas invertido
  for (let y = (word.length - 1); y >= 0; y -= 1){
    wordArrayUpsideDown.push (word[y])
  }
  
  //adiciona um 1 ao verificator se as letras no array não forem iguais
  for (let z = 0; z < word.length; z += 1){
    if (wordArray[z] === wordArrayUpsideDown[z]){
      verificator = verificator + 0;
    } else {
      verificator = verificator + 1;
    }
  }
  
  //condição para verificar se é um palindromo ou não
  if (verificator > 0){
    console.log ("não é um palindromo");
  } else {
    console.log ("é um palindromo")
  }

}

