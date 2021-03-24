const criarObjeto = (objeto, chave, valor) => {
  //não pude usar o parametro como nome de variável.
  objeto = {
  }
  objeto[chave] = valor;
  return objeto;
}

criarObjeto('const obj', 'nome', 'denis')
