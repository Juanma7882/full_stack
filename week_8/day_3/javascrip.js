console.log("estamos conectados");
const container_task = document.querySelector(".container__task");
const inputTextEvent = document.querySelector(".container_input");
const form = document.querySelector(".container");
const buttonDelete = document.querySelector(".container__delete");
const Tareas = document.querySelector(".container__task--p");

let listaDeTareas = JSON.parse(localStorage.getItem("listaDeTareas")) || [];
let tareaAEliminar = "";

const saveToLocalStorage = () => {
  localStorage.setItem("listaDeTareas", JSON.stringify(listaDeTareas));
};

const IsNotEmpty = (text) => {
  return text.value.trim().length > 0;
};

const validarTarea = (input) => {
  let bandera = false;
  if (IsNotEmpty(input)) {
    bandera = true;
  } else {
    console.log("escriba una tarea para poder añadir");
    bandera = false;
  }
  return bandera;
};

const GuardarTarea = (Texto) => {
  idGenerado = Date.now().toString();
  const nueva_tarea = { tarea: Texto, id: idGenerado };
  listaDeTareas.push(nueva_tarea);
  console.log("guardar tarea");
  saveToLocalStorage();
};

const CrearTareas = (lista) => {
  console.log("crear tarea");
  return `<li class="container__task--p" data-id="${lista.id}">${lista.tarea}</li>`;
};

const mostrarTareas = () => {
  container_task.innerHTML = listaDeTareas
    .map((tareas) => CrearTareas(tareas))
    .join("");
  console.log("mostrar tareas");
  console.log(listaDeTareas);
};

const btnAgregar = (e) => {
  e.preventDefault();
  if (validarTarea(inputTextEvent)) {
    console.log(validarTarea(inputTextEvent));
    GuardarTarea(inputTextEvent.value.trim());
    CrearTareas(listaDeTareas);
  }
  mostrarTareas();
};

const tareaClickeada = (e) => {
  const elemento = e.target;
  if (elemento.classList.contains("container__task--p")) {
    const idTarea = elemento.getAttribute("data-id");
    console.log("Tarea clickeada:", idTarea);
    tareaAEliminar = idTarea;
  }
};

const IsELementExist = (id) => {
  return listaDeTareas.some((tarea) => tarea.id === id);
};

const btnEliminar = (e) => {
  e.preventDefault();
  console.log(tareaAEliminar);
  if (IsELementExist(tareaAEliminar)) {
    listaDeTareas = listaDeTareas.filter(
      (tarea) => tarea.id !== tareaAEliminar
    );
    mostrarTareas(); // Actualiza la lista visible
    saveToLocalStorage();
    console.log("Tarea eliminada:", tareaAEliminar);
  } else {
    console.log("Tarea no encontrada");
  }
};

const agregarBordeVioleta = (e) => {
  // Verifica si el clic fue en un elemento con la clase 'container__task--p'
  if (e.target.classList.contains("container__task--p")) {
    // Selecciona todos los elementos con la clase 'container__task--p'
    const tareas = document.querySelectorAll(".container__task--p");

    // Elimina la clase de todos los elementos
    tareas.forEach((tarea) => tarea.classList.remove("bordeVioleta"));

    // Añade la clase al elemento clickeado
    e.target.classList.add("bordeVioleta");
  }
};

const init = () => {
  form.addEventListener("submit", btnAgregar);
  buttonDelete.addEventListener("click", btnEliminar);
  container_task.addEventListener("click", tareaClickeada);
  container_task.addEventListener("click", agregarBordeVioleta);
  mostrarTareas();
};
init();
