
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const countLetters = (acc, nomeArray) => nomeArray === 'a' ?  acc += 1 : acc ;

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, nome) => {
    const arrayNome = nome.toLowerCase().split('')
    return acc += arrayNome.reduce(countLetters, 0)
  }, 0)
}

assert.deepStrictEqual(containsA(), 20);