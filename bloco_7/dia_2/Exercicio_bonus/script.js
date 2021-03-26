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

//requisito 5
const allLessons = {};
const agroupObjects = () => {
  const agroupLesson1 = {
    lesson1,
    lesson2, 
    lesson3,
  }
  Object.assign(allLessons, agroupLesson1);
  return (allLessons)
}
agroupObjects();

const mathStudents = (materiaa) => {
  let numeroDeEstudantes = 0;
  let allLessonsLength = Object.keys(allLessons).length;
  for(let x = 0; x < allLessonsLength; x += 1) {
    let validacaoMatematica = Object.values(allLessons)[x].materia === materiaa;
    let numeroEstudantes = Object.values(allLessons)[x].numeroEstudantes;
    validacaoMatematica ? numeroDeEstudantes += numeroEstudantes : numeroDeEstudantes += 0;
  }
  return numeroDeEstudantes
}

let relatorioProf = {};
const relatorio = (object, nome) => {
  let numeroEstudantesMateria = mathStudents('Matemática')
  let allLessonsLength = Object.keys(allLessons).length;
  for (let x = 0; x < allLessonsLength; x += 1) {
    let validacaoNome = Object.values(allLessons)[x].professor
    let materia = Object.values(allLessons)[x].materia;
    let objectEstudantes = Object.values(allLessons)[x].estudantes;
    if (validacaoNome === nome) {
      relatorioProf = {
        professor: [nome],
        aulas: Object.values(allLessons)[x].materia,
        estudantes: numeroEstudantesMateria,
      }
    }  
  }
  return relatorioProf;
}
console.log(relatorio(allLessons, 'Maria Clara'))
