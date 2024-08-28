// Selecciona los elementos del DOM necesarios
const logoutBtn = document.querySelector("#logout-message");
const userName = document.querySelector("#user-name");

// Trae el usuario activo de la sesión
const activeUser = JSON.parse(sessionStorage.getItem("activeUser"));
console.log(activeUser);

// Muestra el nombre completo del usuario en la página
const showUserName = () => {
  if (activeUser) {
    userName.textContent = `${activeUser.name} ${activeUser.lastName}`;
  } else {
    // Si no hay usuario activo, redirige a la pagina pricinpal
    window.location.href = "../index.html";
  }
};

// Maneja el cierre de sesión
const logout = () => {
  if (window.confirm("¿Estás seguro que deseas cerrar sesión?")) {
    // Elimina el usuario activo de la sesión
    sessionStorage.removeItem("activeUser");
    // Redirige a la página principal o de login
    window.location.href = "../index.html";
  }
};

// Función inicializadora
const init = () => {
  showUserName();
  logoutBtn.addEventListener("click", logout);
};

// Ejecuta la función inicializadora al cargar la página
init();
