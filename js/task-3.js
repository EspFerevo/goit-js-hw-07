'use strict';
//!

const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');

//!

inputName.addEventListener('input', () => {
  const trimmed = inputName.value.trim();

  if (trimmed === '') {
    outputName.textContent = 'Anonymous';
  } else {
    outputName.textContent = trimmed;
  }
});
