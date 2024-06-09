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

  let htmlString = '';
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const backgroundColor = getRandomHexColor();
    htmlString += `<div style="width:${size}px; height:${size}px; background-color:${backgroundColor};"></div>`;
    size += 10;
  }
  boxesEl.innerHTML = htmlString;
  inputEl.value = '';
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}
