const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  const gradesLength = grades[0].length;
  const sumArray = grades.map(element => element.reduce((acc, item) => acc + item, 0))
  const media = sumArray.map(element => element/gradesLength)
  return students.map((stundent, index) => {
    return { name: stundent, average: media[index] }
  })
}
const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);