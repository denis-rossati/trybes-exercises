const naturezaNumero = (n) => {
  if (typeof n !== 'number') return "o valor deve ser um número";
  return n > 0 ? 'positivo' : n === 0 ? 'neutro' : 'negativo';
}

module.exports = naturezaNumero;
