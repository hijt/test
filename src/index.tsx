import './style.css';

function component() {
  let element = document.createElement('div');
  element.innerHTML = 'Привет';
  return element;
};

document.body.appendChild(component());

console.log('compile!!!');
