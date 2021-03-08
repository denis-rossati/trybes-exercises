//Retorna a soma dos números
function sum(a, b){
  console.log (a+b);
}

//Retorna a subtração dos números
function subtraction (a, b){
  console.log (a-b);
}

//Retorna a multiplicação dos numeros
function multiplication (a, b){
  console.log (a*b);
}

//Retorna a divisão dos números
function division (a, b){
  console.log (a/b);
}

//Retorna o resto da divisão dos números
function module (a,b){
  console.log (a%b);
}

 //Indica qual dos dois números é maior
function biggestNumber (a, b){
  if (a>b){
    console.log (a + '>' + b);
  } else {
    console.log (b + '>' + a);
  }
}

//Indica qual dos tres numeros é maior
function biggestOfThreeNumbers(a, b, c){
  //Caso um dos numeros seja igual ao outro, retorna uma mensagem de erro
  if (a == b || a == c || b ==c){
    console.log ("Insira números com valores diferentes");
  } else {
    //Realiza as comparações de cada número e retorna qual é maior.
    if (a>b && a>c){
      console.log (a + ' > ' + b + ' & ' + c);
    } else if (b > a && a > c){
      console.log ( b + ' > ' + a + ' & ' + c);
    } else {
      console.log (c + ' > ' + a + ' & ' + b);
    }
  }
}

//Verifica se um número indicado é negativo ou positivo
function negativeOrPositive (a){
//Realiza as comparações
  if (a>0){
    console.log ("Positive")
  } else if (a<0){
    console.log ("Negative")
  } else {
    console.log ("Zero");
  }
}

//Soma tres números. Se o resultado for menor que 180, diz que não é um triangulo.
function anglesOfTriangle (a, b, c){
  //verifica se um dos valores é 0
  if (a<=0 || b<=0 || c<=0){
    console.log ("Insira valores maiores que 0")
  } else {
    //faz as comparações
    } if ((a+b+c)>180){
      console.log("true");
    } else {
      console.log ("false");
  }
}

//Realiza comparações por meio de switch e case, dependendo da entrada o código retorna mensagens diferentes.
function chessMoves (pieces){
  switch (pieces){
    case ('rei'):
      console.log ("Pode mover-se em qualquer direção, porém apenas uma casa por vez");
      break;
    case ('rainha'):
      console.log ("Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.");
      break;
    case ('torre'):
      console.log ("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.")
      break;
    case ('bispo'):
      console.log ("Move-se na diagonal, quantas casas quiser. ")
      break;
    case ('cavalo'):
      console.log ("Conhecido por “um-dois” ou “em L.");
      break;
    case ('peão'):
      console.log ("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas")
      break;
    default:
      console.log ("Insira um nome de peça valido.");
      break;
    }
}
//chessMoves ("Rei".toLowerCase())

//Converte a nota em A~F.
function grades (a){
  //realiza as comparações e retorna a nota em forma de letra
  if (a >= 90){
    console.log ('A');
  } else if (a >=80){
    console.log ('B')
  } else if (a >= 70){
    console.log ('C');
  } else if (a >= 60){
    console.log ('D');
  } else if (a >= 50){
    console.log ('E');
  } else if (a < 50){
    console.log ('F');
  } else if (a > 100 || a > 0) {
    console.log ('insira uma nota entre 0 e 100')
  }
}

function evenOrNot (a, b, c){

  //faz as comparações para saber se é impar ou par
  if ((a%2 ==0) || (b%2 == 0) || (c%2 == 0)){
    console.log (true);
  } else {
    console.log (false);
  }
}

function oddOrNot (a, b, c){

  //faz as comparações para saber se é impar ou par
  if ((a%2 !=0) || (b%2 != 0) || (c%2 != 0)){
    console.log (true);
  } else {
    console.log (false);
  }
}

