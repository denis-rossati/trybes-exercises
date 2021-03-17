let estados = ['AC - Acre', 'AL - Alagoas', 'AP - Amapá', 'AM - Amazonas',
 'BA - Bahia', 'CE - Ceará', 'DF - Distrito Federal', 'ES - Espírito Santo', 'GO - Goías',
 'MA - Maranhão', 'MT - Mato Grosso', 'MS - Mato Grosso do Sul', 'MG - Minas Gerais',
 'PA - Pará', 'PB - Paraíba', 'PR - Paraná', 'PE - Pernambuco', 'PI - Piauí',
 'RJ - Rio de Janeiro', 'RN - Rio Grande do Norte', 'RS - Rio Grande do Sul', 'RO - Rondônia',
  'RR - Roraíma', 'SC - Santa Catarina', 'SP - São Paulo', 'SE - Sergipe', 'TO - Tocantins'];
const getDate = document.getElementById('date');
let day = '';
let month = '';
let year = '';
let arrayRespostas = [];

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

function getCheckedRadio() {
  const getRadioChecked = document.getElementsByName('home');
  for (let x = 0; x < getCheckedRadio.length; x += 1) {
    if (getRadioChecked.checked) {
      return(getCheckedRadio[x])
    }
  }
}

function getInputValues() {
  
}

function actionSubmit() {
  let arrayCategorias = ['Nome: ', 'E-mail: ', 'CPF: ', 'Endereço: ', 'Cidade: ', 'Estado: ', 'Moradia: ', 'Resumo: ', 'Cargo: ', 'Descrição: ', 'Data de início:'];
  document.querySelector('button').addEventListener('click', () => {
    document.body.appendChild(document.createElement('div'));
    document.body.lastChild.classList.add('ResumeClass');
    const divResumo = document.getElementsByClassName('ResumeClass')[0];
    for (let counter = 0; counter < arrayCategorias.length; counter += 1) {
      divResumo.innerText += arrayCategorias[counter]; //valoresdoinput
    }
  });
}

window.onload = () => {
  insertStates();
  getDateComplete();
  actionSubmit();
}