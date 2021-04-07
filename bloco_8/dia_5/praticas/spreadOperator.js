// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Limão', 'Abacaxi', 'Morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Sal', 'Vinagre', 'Mais sal'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const salad = [...specialFruit, ...additionalItens];
  return salad;
};

console.log(fruitSalad(specialFruit, additionalItens));