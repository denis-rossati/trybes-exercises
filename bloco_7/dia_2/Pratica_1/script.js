const criarObjeto = (objeto, chave, valor) => {
  //não pude usar o parametro como nome de variável.
  objeto = {
  }
  objeto[chave] = valor;
  console.log(objeto);
}

criarObjeto('const obj', 'nome', 'denis')