const btnLogin = document.querySelector('#btn-login');

const authLog = () => {
  const login = document.querySelector('#email').value;
  const pass = document.querySelector('#password').value;
  if (login === 'tryber@teste.com' && pass === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
};

btnLogin.addEventListener('click', authLog);

const house = document.querySelector('#house');
const fieldBorder = document.querySelector('.field-border');
const header = document.querySelector('.header');
const formColor = document.querySelector('#evaluation-form');

function changeColorHouse(color) {
  fieldBorder.style.border = `1px solid ${color}`;
  header.style.backgroundColor = color;
  formColor.style.color = color;
}

function customHouseStyle() {
  const houseValue = house.value;
  switch (houseValue) {
  case 'Gitnória':
    changeColorHouse('red');
    break;
  case 'Reactpuff':
    changeColorHouse('blue');
    break;
  case 'Corvinode':
    changeColorHouse('green');
    break;
  case 'Pytherina':
    changeColorHouse('yellow');
    break;
  default:
    break;
  }
}

house.addEventListener('change', customHouseStyle);

const checkBox = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

checkBox.addEventListener('click', () => {
  if (checkBox.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

function textAreaCounter() {
  const textArea = document.querySelector('#textarea');
  const counter = document.querySelector('#counter');

  textArea.addEventListener('input', () => {
    counter.innerHTML = `${textArea.maxLength - textArea.value.length} caracteres restantes.`;
  });
}
textAreaCounter();

function getFullName() {
  const name = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;

  return `${name} ${lastName}`;
}

function getFamily() {
  const families = document.getElementsByName('family');

  for (let i = 0; i < families.length; i += 1) {
    if (families[i].checked) {
      return families[i].value;
    }
  }
  return null;
}

function getSubjects() {
  const subjects = document.getElementsByName('subject');
  const chosenSubs = [];
  for (let i = 0; i < subjects.length; i += 1) {
    if (subjects[i].checked) {
      chosenSubs.push(subjects[i].value);
    }
  }
  return chosenSubs;
}

function getRate() {
  const rates = document.getElementsByName('rate');

  for (let i = 0; i < rates.length; i += 1) {
    if (rates[i].checked) {
      return rates[i].value;
    }
  }
  return null;
}

const infoList = [];

function getSubmitData(event) {
  event.preventDefault();
  infoList.push(`Nome: ${getFullName()}`);
  infoList.push(`Email: ${document.querySelector('#input-email').value}`);
  infoList.push(`Casa: ${document.querySelector('#house').value}`);
  infoList.push(`Família: ${getFamily()}`);
  infoList.push(`Matérias: ${getSubjects().toString()}`);
  infoList.push(`Avaliação: ${getRate()}`);
  infoList.push(`Observações: ${document.querySelector('textarea').value}`);
}

// function showSubmitData () {
//   fieldBorder.innerHTML = '';
//   const name = document.createElement('p');
//   name.innerText = `Nome: ${infoList[0]} ${infoList[1]}`;
//   const email = document.createElement('p');
//   email.innerText = `Email: ${infoList[2]}`;
//   const houseValue = document.createElement
// }

submitBtn.addEventListener('click', getSubmitData);
submitBtn.addEventListener('click', () => {
  if (infoList.length > 0) {
    console.log(infoList);
  }
});
