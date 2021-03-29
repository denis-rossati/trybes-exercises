const sendA = (userAnswer) => (question) => {
  let lowCaseAnswer = userAnswer.toLowerCase();
  let lowCaseQuestion = question.toLowerCase();
  return createQ(lowCaseAnswer, lowCaseQuestion);
}

const createQ = (answer, question) => {
  const realAnswer = 'sim';
  const realQuestion  = 'teste';
  if (realAnswer === answer && realQuestion === question) {
    return 'true';
  }
  return 'false';
}

const sendA_sim = sendA('siM');
console.log(sendA('SiM')('TestE'))
