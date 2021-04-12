const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// o parâmetro foi modificado para que ele receba uma das funções acima, essa função vai ser definida na hora da chamada;
const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // a linha abaixo foi modificada para retorna a função definida no parâmetro. E o parametro da função abaixo é um objeto que foi desestruturado nas duas primeiras funções.
  return callback(userToReturn)
};

// as duas funções abaixo declaram qual função de callback será executada.
assert.strictEqual(getUser(userFullName), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.strictEqual(getUser(userNationality), "Ivan is Russian"); // complete a chamada da função de getUser