function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function addDaysOfMonth() {
  for (let x = 0; x < dezDaysList.length; x += 1) {
    let docLi = document.createElement("li");
    let docUl = document.getElementById("days");
    docUl.appendChild(docLi);
    docLi.innerText = dezDaysList[x]
    docLi.className = "day"
  }
  document.getElementsByTagName("li")[25].className = "day holiday"
  document.getElementsByTagName("li")[26].className = "day holiday"
  document.getElementsByTagName("li")[30].className = "day holiday"
  document.getElementsByTagName("li")[14].className = "day friday"
  document.getElementsByTagName("li")[21].className = "day friday"
  document.getElementsByTagName("li")[28].className = "day friday"
  document.getElementsByTagName("li")[35].className = "day friday"
}
addDaysOfMonth();
