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

    if ((x == 26)) {
      document.querySelectorAll("li")[(8 + x)].className = "day holiday";
    } 

    if ((x == 27)) {
      document.querySelectorAll("li")[((8 + x))].className = "day friday holiday";
    }
  }
  let ulRejectedChild = document.getElementById("days");
  ulRejectedChild.lastChild.className = "day holiday";
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

function changeColors(){
  let docButton = document.querySelectorAll("button")[0];
  let docHolidays = document.querySelectorAll(".holiday");
  let backgroundGreen = "lightGreen";

  docButton.addEventListener("click", function(){
    for (let x = 0; x < docHolidays.length; x += 1) {
      docHolidays[x].style.backgroundColor = backgroundGreen;
    }
  })
}
changeColors();

function btnFriday(string) {
  let docButton = document.createElement("button");
  let getButton = document.getElementsByClassName("buttons-container")[0];
  getButton.appendChild(docButton);
  docButton.innerText = string;
  docButton.id = "btn-friday"
}
btnFriday("Sexta-feira");

function modifyText(string) {
  let fridayArray = document.getElementsByClassName("friday");
  document.getElementsByTagName("button")[1].addEventListener("click", function(){
    for (let x = 0; x < fridayArray.length; x += 1) {
      document.getElementsByClassName("friday")[x].innerText = string;
    }
  })
}
modifyText("Sextooou!!");

function Zoom() {
  let docDay = document.querySelector('#days');
  docDay.addEventListener("mouseover", function(event){
    event.target.style.fontSize = '30px';
    event.target.style.fontWeigth = '800';
  })

}
function ZoomOut() {
    let docDay = document.querySelector('#days');
  docDay.addEventListener("mouseout", function(event){
    event.target.style.fontSize = '20px';
    event.target.style.fontWeigth = '200';
  })
}
Zoom();
ZoomOut();

function compromises(string) {
  docSpan = document.createElement("span");
  let docDiv = document.getElementsByClassName("my-tasks")[0]
  docDiv.appendChild(docSpan);
  docSpan.innerText = string;

}
compromises('stringaleatoria');

function cor(cor) {
  let docDiv = document.createElement("div");
  docDiv.className = "task";
  let docDiv2 = document.querySelector(".my-tasks");
  docDiv2.appendChild(docDiv);
  docDiv.style.backgroundColor = cor;
}
cor('#77DD77')


