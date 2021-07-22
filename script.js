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

function customHouseStyle() {
  const houseValue = house.value;
  const fieldBorder = document.querySelector('.field-border');
  switch (houseValue) {
  case 'Gitnória':
    fieldBorder.style.border = '1px solid red';
    break;
  case 'Reactpuff':
    fieldBorder.style.border = '1px solid blue';
    break;
  case 'Corvinode':
    fieldBorder.style.border = '1px solid green';
    break;
  case 'Pytherina':
    fieldBorder.style.border = '1px solid yellow';
    break;
  default:
    break;
  }
}

house.addEventListener('change', customHouseStyle);
