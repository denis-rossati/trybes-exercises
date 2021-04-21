// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const validateSpecialities = (id, [ firstName, lastName, ...specialities ]) => {
  let validate = 0;
  if(id.firstName !== firstName) validate += 1;
  if(id.lastName !== lastName) validate += 1;
  specialities.forEach(item => {
    if(!id.specialities.includes(item)) validate += 1;
  });
  return validate;
}

// Pesquisa
const searchEmployee = (id, [ firstName, lastName, ...specialities ]) => {
  // Implemente seu código aqui
  // se o id for inválido, retornar erro 
  if(!(professionalBoard.find((item) => item.id === id))) throw new Error('ID não identificada');
  const validId = professionalBoard.find((item) => item.id === id);
  // se a informação for inválida, retornar erro
  if (validateSpecialities(validId, [ firstName, lastName, ...specialities ]) !== 0) throw new Error ('Informação indisponível');
  // retornar a informação consultada
  return validId;
};

module.exports = { searchEmployee, professionalBoard };