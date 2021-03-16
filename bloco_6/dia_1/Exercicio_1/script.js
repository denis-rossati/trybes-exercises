let estados = ['AC - Acre', 'AL - Alagoas', 'AP - Amapá', 'AM - Amazonas',
 'BA - Bahia', 'CE - Ceará', 'DF - Distrito Federal', 'ES - Espírito Santo', 'GO - Goías',
 'MA - Maranhão', 'MT - Mato Grosso', 'MS - Mato Grosso do Sul', 'MG - Minas Gerais',
 'PA - Pará', 'PB - Paraíba', 'PR - Paraná', 'PE - Pernambuco', 'PI - Piauí',
 'RJ - Rio de Janeiro', 'RN - Rio Grande do Norte', 'RS - Rio Grande do Sul', 'RO - Rondônia',
  'RR - Roraíma', 'SC - Santa Catarina', 'SP - São Paulo', 'SE - Sergipe', 'TO - Tocantins'];
const getDate = document.getElementById('date');
const botao = document.getElementById('botao');
let curriculumElements = ['Nome: ', 'Email: ', 'CPF: ', 'Endereço: ', 'Cidade: ', 'Estado: ', 'Moradia: ', 'Resumo: ', 'Cargo: ', 'Descrição: ', 'Data de início: '];
let day = '';
let month = '';
let year = '';
let info = {}


function insertStates() {
  for (let counter = 0; counter < estados.length; counter += 1) {
    document.getElementById('state').appendChild(document.createElement('option'))
    document.getElementById('state').lastChild.innerText = estados[counter]
  }
}

// quis fazer uma função pra isso em ver de usar o type="date"
function separeDayDateString() {
  let dayValidation = '';
  if (getDate.value.length > 1){
    dayValidation = (getDate.value[0] + getDate.value[1]);
    if (dayValidation > 0 && dayValidation <= 31) {
      day = dayValidation;
    } else {
      getDate.value = 'insira uma data valida';
    }
  };
}

function separeMonthDateString() {
  let monthValidation = '';
  if (getDate.value.length > 3) {
    monthValidation = (getDate.value[2] + getDate.value[3]);
    if (monthValidation > 0 && monthValidation <= 12) {
      month = monthValidation;
    } else {
      getDate.value = 'insira uma data valida';
    }
  }
}

function separeYearDateString() {
  let yearValidation = '';
  if (getDate.value.length > 7) {
    yearValidation = (getDate.value[4] + getDate.value[5] + getDate.value[6] + getDate.value[7]);
    if (yearValidation > 0) {
      year = yearValidation;
    } else {
      getDate.value = 'insira uma data valida';
    }
  }
}

function getDateComplete() {
  let dateValue = '';
  getDate.addEventListener('keyup', () => {
    separeDayDateString();
    separeMonthDateString();
    separeYearDateString();
    dateValue = (day + '/' + month + '/' + year);
    if(dateValue.length == 10) {
      getDate.value = dateValue;
    }
  });
}

function getValues() {
  info.nome = document.getElementById('name').value;
  info.email = document.getElementById('email').value;
  info.cpf = document.getElementById('cpf').value;
  info.adress = document.getElementById('endereco').value;
  info.city = document.getElementById('city').value;
  info.state = document.getElementById('state').value;
  info.home = (getRadioValue());
  info.curriculumResume = document.getElementById('resume').value;
  info.cargo = document.getElementById('cargo').value;
  info.cargDesc = document.getElementById('cargDescription').value;
  info.date = document.getElementById('date').value;
}

function getRadioValue() {
  let choiceHome = '';
  document.getElementById('casa').addEventListener('click', () => {
    choiceHome = (document.getElementById('casa').value);
  })
  document.getElementById('apartamento').addEventListener('click', () => {
    choiceHome = (document.getElementById('apartamento').value);
  })
  return(choiceHome);
}

function addCurriculum() {
  for (let key = 0; key < 11; key += 1) {
    document.getElementById('Cdiv').appendChild(document.createElement('p'));
    document.getElementById('Cdiv').lastChild.innerText = curriculumElements[key] + info[key] ;
  }
}

function clickButton() {
  let curriculumDiv = (document.createElement('div'));
  botao.addEventListener('click', (evento) => {
    evento.preventDefault();
    getValues();
    document.body.appendChild(curriculumDiv);
    curriculumDiv.id = 'Cdiv';
    addCurriculum();
  });
}

window.onload = () => {
  insertStates();
  getDateComplete();
  clickButton();
}
