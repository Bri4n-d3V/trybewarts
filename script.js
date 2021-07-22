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
