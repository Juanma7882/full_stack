const taskInput = document.querySelector(".input-text");
const addForm = document.querySelector(".add-form");
const taskContainer = document.querySelector(".tasks-list");
const deleteAllBtn = document.querySelector(".deleteAll-btn");

// let taskList = [];

// localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

const saveLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(taskList));
};
// crear una funcion para inyectar codigo el condigo inyectado se escribe con backlips
const createTask = (task) => {
  return `<li>${task.name}<img class="delete-btn" src="./img/delete.svg" alt="boton de borrar" data-id="${task.id}"/></li>`;
};

const renderTaskList = () => {
  taskContainer.innerHTML = taskList.map((task) => createTask(task)).join("");
};

const isValidTask = (taskName) => {
  let isValid = true;

  if (!taskName.length) {
    alert("por favor, ingrese una tarea");
    isValid = false;
  } else if (
    taskList.some((task) => task.name.toLowerCase() === taskName.toLowerCase())
  ) {
    alert("la tarea con este nombre ya existe");
    isValid = false;
  }
  return isValid;
};

const addTask = (e) => {
  e.preventDefault();
  const taskName = taskInput.value.trim();

  if (isValidTask(taskName)) {
    taskList = [...taskList, { name: taskName, id: Date.now() }];

    renderTaskList();
    addForm.reset();
    toggleDeleteAllButton();
    saveLocalStorage();
    // console.log(taskList);
  }
};

const removeTask = (e) => {
  if (!e.target.classList.contains("delete-btn")) return; // Corregido container a contains
  console.log(e.target);

  const filterId = Number(e.target.dataset.id);
  taskList = taskList.filter((task) => task.id !== filterId);

  renderTaskList();
  toggleDeleteAllButton();
  saveLocalStorage();
};

const toggleDeleteAllButton = () => {
  if (!taskList.length) {
    deleteAllBtn.classList.add("hidden");
    return;
  }
  deleteAllBtn.classList.remove("hidden");
};

const removeAll = () => {
  taskList = [];
  renderTaskList();
  toggleDeleteAllButton();
  saveLocalStorage();
};

const init = () => {
  document.addEventListener("DOMContentLoaded", renderTaskList());
  addForm.addEventListener("submit", addTask); // Corregido sudmit a submit
  taskContainer.addEventListener("click", removeTask); // Activar la función removeTask en clic
  deleteAllBtn.addEventListener("click", removeAll);
  document.addEventListener("DOMContentLoaded", toggleDeleteAllButton());
};

init();
