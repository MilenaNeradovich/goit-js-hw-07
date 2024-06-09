const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

function updateText() {
  const trimValue = inputEl.value.trim();
  if (trimValue !== '') {
    outputEl.textContent = trimValue;
  } else {
    outputEl.textContent = 'Anonymous';
  }
}

inputEl.addEventListener('input', updateText);
