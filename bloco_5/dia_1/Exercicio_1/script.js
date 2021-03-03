//acessa o <p> do documento e o modifica
document.getElementsByTagName("p")[1].innerText = "Formado na trybe e num bom emprego";

function changeColor(color){
  document.getElementsByClassName("main-content").style.backgroundColor = "green";
}

function corretText() {
document.getElementsByTagName("h2").innerText = "Exercício 5.1 - JavaScript";
}

corretText();









































