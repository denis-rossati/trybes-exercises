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
    let counterHoliday = (x + 10);
    let docLi = document.createElement("li");
    let docUl = document.getElementById("days");
    docUl.appendChild(docLi);
    docLi.innerText = dezDaysList[x]
    docLi.className = "day"

    if ((x == 6) || (x == 13) || (x == 20)) {
      document.querySelectorAll("li")[((8 + x))].className = "day friday";
    }    

    if ((x == 26) || (x == 33)) {
      document.querySelectorAll("li")[((8 + x))].className = "day holiday";
    } 

    if ((x == 27)) {
      document.querySelectorAll("li")[((8 + x))].className = "day friday holiday";
    }
  }
}
addDaysOfMonth();

function holidays(string) {
  let docButton = document.createElement("button");
  let docButtonContainer = document.querySelector(".buttons-container")
  docButton.innerText = string;
  docButtonContainer.appendChild(docButton); 
  docButton.id = "btn-holiday"
}
holidays('Feriados')