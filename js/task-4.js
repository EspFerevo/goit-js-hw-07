'use strict';
//!

const loginForm = document.querySelector('.login-form');

//!

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(this));

  if (!Object.values(formData).every(value => value.trim() !== '')) {
    alert('All form fields must be filled in');
  } else {
    console.log(formData);
    this.reset();
  }
});
