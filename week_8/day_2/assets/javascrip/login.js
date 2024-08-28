// const loginForm = document.getElementById("login--form");
// const emailInput = document.getElementById("email");
// const passInput = document.getElementById("password");
// const errorMessage = document.getElementById("form__error");

// const users = JSON.parse(localStorage.getItem("users")) || [];

// const saveToSessionStorage = (user) => {
//   sessionStorage.setItem("activeUser", JSON.stringify(user));
// };

// // Funcion para validar que el campo no este vacio
// const isEmpty = (input) => {
//   return !input.value.trim().length;
// };

// // Funcion para validar que el email exista
// const isExistingEmail = (input) => {
//   return users.some((user) => user.email === input.value.trim());
// };

// // Funcion para validar si la contrasena que ingresamos es igual con la que se registro el email
// const isMatchingPass = (input) => {
//   const user = users.find((user) => user.email === emailInput.value.trim());

//   return user.password === input.value.trim();
// };

// // Funcion para mostrar el error en el UNICO small que tenemos en el form
// const showError = (message) => {
//   errorMessage.textContent = message;
// };

// // Funcion para validar estos dos campos
// /*
//     -1. Chequear si el campo del email esta vacio
//     -2. Chequear si el email que ingresamos existe en el array del LS
//     -3. Chequear si el campo de password esta vacio
//     -4. Chequear que la contrasena coincida
//     Si pasa todo esto es porque esta joya
// */
// const isValidAccount = () => {
//   let valid = false;

//   if (isEmpty(emailInput)) {
//     showError("Por favor, completa los campos");
//     return;
//   }

//   if (!isExistingEmail(emailInput)) {
//     showError("El email ingresado no es valido");
//     return;
//   }

//   if (isEmpty(passInput)) {
//     showError("Por favor, completa los campos");
//     return;
//   }

//   if (!isMatchingPass(passInput)) {
//     showError("Los datos ingresados son incorrectos");
//     loginForm.reset();
//     return;
//   }

//   alert("Ya estas en linea");
//   valid = true;
//   errorMessage.textContent = "";
//   return valid;
// };

// const login = (e) => {
//   e.preventDefault();

//   // Debug 🐞
//   //   console.log(users.find((user) => user.email === emailInput.value));
//   //   console.log(emailInput.value);

//   if (isValidAccount()) {
//     const user = users.find((user) => user.email === emailInput.value.trim());
//     saveToSessionStorage(user);
//     window.location.href = "../pages/home.html";
//   }
// };

// const init = () => {
//   loginForm.addEventListener("submit", login);
// };

// init();

console.log("estamos conectados");

login_form = document.getElementById("login--form");
email_Input = document.getElementById("email");
password_input = document.getElementById("password");

email_error = document.getElementById("email_error");
contraseña_error = document.getElementById("contraseña_error");
form_error = document.getElementById("form__error");

const users = JSON.parse(localStorage.getItem("users")) || [];

const saveToSessionStorage = (user) => {
  sessionStorage.setItem("activeUser", JSON.stringify(user));
};

// funciones auxiliares generales
const NoEstaVacio = (input) => {
  return input.value.trim().length > 0;
};

// funciones auxiliares correo
const ValidarCorreo = (correo) => {
  const re = /^[a-zA-Z0-9_]{1,18}@(gmail\.com|hotmail\.com)$/;
  return re.test(correo.value.trim());
};
const ValidarCorreoExiste = (correoAValidar) => {
  return users.some((user) => user.email === correoAValidar.value.trim());
};

// funciones auxiliares contraseña
const validarContraseña = (contraseña) => {
  re = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/;
  return re.test(contraseña.value);
};
const validarContraseñaExiste = (contraseñaInput) => {
  const user = users.find((user) => user.email === email_Input.value);
  return user.password === contraseñaInput.value;
};

const checkEmail = (emailInput) => {
  let bandera = false;
  if (!NoEstaVacio(emailInput)) {
    email_error.textContent = "Rellene el campo de correo para iniciar secion";
    console.log(!NoEstaVacio(emailInput) + "jdalskdjl");
  } else if (!ValidarCorreo(emailInput)) {
    email_error.textContent = "correo no valida";
    // console.log(ValidarCorreo(emailInput));
  } else if (ValidarCorreoExiste(emailInput)) {
    email_error.textContent = " email valida";
    bandera = true;
  }
  return bandera;
};

const checkPassword = (contraseñaInput) => {
  let bandera = false;
  if (!NoEstaVacio(contraseñaInput)) {
    contraseña_error.textContent =
      "Rellene el campo de contraseña para iniciar secion";
  } else if (!validarContraseña(contraseñaInput)) {
    contraseña_error.textContent = "contraseña no es valida";
    console.log(!validarContraseña(contraseñaInput));
  } else if (validarContraseñaExiste(contraseñaInput)) {
    contraseña_error.textContent = "c valida";
    bandera = true;
  }
  return bandera;
};

const validarSesion = (emailInput, contraseñaInput) => {
  const isCheckEmailValid = checkEmail(emailInput);
  const isCheckPassValid = checkPassword(contraseñaInput);

  const IsSesionValid = isCheckEmailValid && isCheckPassValid;
  if (IsSesionValid) {
    alert("inicio secion ");
    const user = users.find((user) => user.email === email_Input.value);

    saveToSessionStorage(user);
    alert(saveToSessionStorage(user));
    window.location.href = "home.html";
  }
  // console.log(IsSesionValid);
};

const login = (evento) => {
  evento.preventDefault();
  email_error.textContent = "";
  contraseña_error.textContent = "";
  validarSesion(email_Input, password_input);
};

const init = () => {
  login_form.addEventListener("submit", login);
};
init();
