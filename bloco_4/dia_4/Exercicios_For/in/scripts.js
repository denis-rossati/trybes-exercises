//informaçoes a respeito da margarida
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

//informaçoes a respeito do tio patinhas
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

/*
console.log ("Bem-vinda, " + info.personagem);
*/

//adiciona uma propriedade ao objeto
info.recorrente = "Sim";

/*
console.log (info)

//um for in que itera as chaves do objeto da margarida
for (let index in info){
  console.log (index);
}

//for in que itera os elementos das chaves do objeto da margarida
for (let index in info){
  console.log (info[index]);
}
*/

//itera elementos dos objetos da margarida e do tio patinhas
for (let index in info){
  console.log (info[index] + ' e ' + info2[index] )
}


