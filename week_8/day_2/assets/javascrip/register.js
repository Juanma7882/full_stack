console.log("Estamos conectados");

const registerForm = document.getElementById("register-form");
const nameInput = document.getElementById("name");
const lastNameImput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const phoneInput = document.getElementById("phone");

const users = JSON.parse(localStorage.getItem("users")) || [];

const saveToLocalStorage = () => {
  localStorage.setItem("users", JSON.stringify(users));
};

//  function aux

const IsNotEmpty = (input) => {
  return input.value.trim().length > 0;
};

const IsBetween = (input, min, max) => {
  return input.value.length >= min && input.value.length <= max;
};

const isEmailValid = (input) => {
  const re = /^[a-zA-Z0-9_]{1,18}@(gmail\.com|hotmail\.com)$/;
  return re.test(input.value.trim());
};

const isExistEmail = (input) => {
  return users.some((user) => user.email === input.value.trim());
};

const isPasswordSecure = (input) => {
  const re = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/;
  // const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
  return re.test(input.value.trim());
};

const isPhoneValid = (input) => {
  const re = /^\d{11}$/;
  return re.test(input.value.trim());
};
const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");

  const error = formField.querySelector("small");
  error.style.display = "block";
  error.textContent = message;
};

const showSucces = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");

  const error = formField.querySelector("small");
  error.textContent = "";
};

const checkInput = (input) => {
  const MIN_CHARACTERS = 3;
  const MAX_CHARACTERS = 25;
  let valid = false;
  if (!IsNotEmpty(input)) {
    showError(input, "este campo es obligatorio");
    return valid;
  }

  if (!IsBetween(input, MIN_CHARACTERS, MAX_CHARACTERS)) {
    showError(
      input,
      `Este campo debe tener entre ${MIN_CHARACTERS} y ${MAX_CHARACTERS} caracteres`
    );
    return valid;
  }
  showSucces(input);
  valid = true;
  return valid;
};

const checkEmail = (input) => {
  let valid = false;
  if (!IsNotEmpty(input)) {
    showError(input, "el email es obligatorio");
    return valid;
  }
  if (!isEmailValid(input)) {
    showError(input, "el email no es valido ");
    return valid;
  }
  if (isExistEmail(input)) {
    showError(input, "el email ya esta registrado ");
    return valid;
  }
  showSucces(input);
  valid = true;
  return valid;
};

const checkPassword = (input) => {
  let valid = false;
  if (!IsNotEmpty(input)) {
    showError(input, "La contraseña es obligatorio");
    return valid;
  }
  if (!isPasswordSecure(input)) {
    showError(
      input,
      "la contraseña debe contener una mayuscula una minuscula un numero como minimo y un largo entre 8 y 16 "
    );
    return valid;
  }
  showSucces(input);
  valid = true;
  return valid;
};

const checkPhoneNumber = (input) => {
  let valid = false;
  if (!IsNotEmpty(input)) {
    showError(input, "el numero de telefono es obligatorio");
    return valid;
  }
  if (!isPhoneValid(input)) {
    showError(input, "el numero debe contener 10 caracteres numericos");
    return valid;
  }
  showSucces(input);
  valid = true;
  // validarForm;
  return valid;
};

const validarForm = (e) => {
  e.preventDefault();

  const isNameValid = checkInput(nameInput);
  const isLastNameValid = checkInput(lastNameImput);
  const isEmailValidd = checkEmail(emailInput);
  const ispassValid = checkPassword(passInput);
  const isPhoneValidd = checkPhoneNumber(phoneInput);

  let isValitForm =
    isNameValid &&
    isLastNameValid &&
    isEmailValidd &&
    ispassValid &&
    isPhoneValidd;

  console.log(isValitForm);

  if (isValitForm) {
    users.push({
      name: nameInput.value.trim(),
      lastName: lastNameImput.value.trim(),
      email: emailInput.value.trim(),
      password: passInput.value.trim(),
      phone: phoneInput.value.trim(),
    });
    alert("te logueaste");
    saveToLocalStorage(users);
    window.location.href = "login.html";
  }
};

const init = () => {
  nameInput.addEventListener("input", () => {
    checkInput(nameInput);
  });
  lastNameImput.addEventListener("input", () => {
    checkInput(lastNameImput);
  });
  emailInput.addEventListener("input", () => checkEmail(emailInput));

  passInput.addEventListener("input", () => checkPassword(passInput));

  phoneInput.addEventListener("input", () => checkPhoneNumber(phoneInput));

  registerForm.addEventListener("submit", validarForm);
};

init();
