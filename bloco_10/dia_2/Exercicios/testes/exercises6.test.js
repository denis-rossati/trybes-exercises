const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    if(Animals.find(animal => animal.name === name)) {
      return resolve(Animals.find(animal => animal.name === name));
    }
    return reject('Nenhum animal com esse nome!');
  })
);

const getAnimal = (name) => {
  // Adicione o código aqui.
  return findAnimalByName(name).then(data => data);
};
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});