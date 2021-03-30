let finalGrade = 0;

const calculateGrade = (feedback, userAnswer) => {
  if (feedback === userAnswer) {
    return 1;
  } else if (userAnswer === 'N.A') {
    return 0;
  } else if (feedback !== userAnswer) {
    return -0.5;
  }
}


const getInfo = (feedback, userAnswer, grade) => {
  for (let x = 0; x < feedback.length; x += 1) {
    finalGrade += grade(feedback[x], userAnswer[x]);
  }
  return finalGrade;
};

const rightAnswers =   ['B', 'C',   'B', 'D', 'A', 'A', 'D',   'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(getInfo(rightAnswers, studentAnswers, calculateGrade));