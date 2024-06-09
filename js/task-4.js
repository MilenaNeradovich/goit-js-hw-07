const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', event => {
  event.preventDefault();

  const emailInput = formEl.elements.email;
  const passwordInput = formEl.elements.password;
  const trimmedEmail = emailInput.value.trim();
  const trimmedPassword = passwordInput.value.trim();

  if (trimmedEmail === '' || trimmedPassword === '') {
    alert('All form fields must be filled in');
  } else {
    const formData = { email: trimmedEmail, password: trimmedPassword };
    console.log(formData);
    formEl.reset();
  }
});
