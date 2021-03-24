const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//requisito 1
const addTurnLesson2 = (modify, key, value) => {
  const morningTurn = {
    [key]: value
  }
  Object.assign(modify, morningTurn);
}
addTurnLesson2(lesson2, Object.keys(lesson1)[3], Object.values(lesson1)[3])

//requisito 2
const listKeys = (objeto) => {
  return Object.keys(objeto);
}
for (let contador = 1; contador < 4; contador += 1) {
  let parametro = `lesson${contador}`
  listKeys(eval(parametro))
}

//requisito 3
const sizeObject = objeto => {
  return Object.keys(objeto).length;
}
sizeObject(lesson1);

//requisito 4
