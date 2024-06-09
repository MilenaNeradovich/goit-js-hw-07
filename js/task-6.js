function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlsEl = document.querySelector('#controls');
const boxesEl = document.querySelector('#boxes');
const inputEl = controlsEl.querySelector('input');
const createBtn = controlsEl.querySelector('[data-create]');
const destroyBtn = controlsEl.querySelector('[data-destroy]');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  boxesEl.innerHTML = '';
  const amount = parseInt(inputEl.value);
  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const boxEl = document.createElement('div');
    boxEl.style.width = `${size}px`;
    boxEl.style.height = `${size}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxesEl.appendChild(boxEl);
    size += 10;
  }
  inputEl.value = '';
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}
