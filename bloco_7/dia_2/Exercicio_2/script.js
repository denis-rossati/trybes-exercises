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

//requisito 2
const listKeys = (objeto) => Object.keys(objeto);

//requisito 3
const sizeObject = objeto => Object.keys(objeto).length;

//requisito 4
const objectsValues = objeto => Object.values(objeto);

//requisito 5
const allLessons = {};
const agroupObjects = () => {
  const agroupLesson1 = {
    lesson1,
    lesson2, 
    lesson3,
  }
  return Object.assign(allLessons, agroupLesson1);
}

//requisito 6
const numberOfStudents = () => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;

//requisito 7
const showKey = (object, position) => {
  const keysObject = Object.values(object);
  return keysObject[position];
}

//requisito 8
const findAtribute = (object, key, value) => (object[key] === value) ? true : false;


addTurnLesson2(lesson2, Object.keys(lesson1)[3], Object.values(lesson1)[3]);
for (let contador = 1; contador < 4; contador += 1) {
  let parametro = `lesson${contador}`;
  listKeys(eval(parametro));
}
sizeObject(lesson1);
objectsValues(lesson1);
agroupObjects();
numberOfStudents()
showKey(lesson1, 0);
findAtribute(lesson1, 'turno', 'manhã');
