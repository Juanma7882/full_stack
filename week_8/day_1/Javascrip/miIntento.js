let input = document.querySelector(".input-text");
let listaDeTareas = document.querySelector(".tasks-list");
let addForm = document.querySelector(".add-form");
let btnEliminarTodo = document.querySelector(".deleteAll-btn");

let Lista = JSON.parse(localStorage.getItem("tareas")) || [];

const LocalStorage = () => {
  localStorage.setItem("tareas", JSON.stringify(Lista));
};

const AddList = (e) => {
  e.preventDefault();
  //obtenemos un valor del input
  let txtIngresado = input.value.trim();
  if (validarInput(txtIngresado)) {
    console.log(txtIngresado);
    Lista.push({ nombre: txtIngresado, id: Date.now() });
    inyectarHtml(); // CORRECCIÓN: Debe llamarse como función
    addForm.reset();
  }
  console.log(Lista);
  btnDeletehiden();
  LocalStorage();
};

// validamos el input
const validarInput = (txtIngresado) => {
  if (!txtIngresado.length) {
    alert("ingrese un texto");
    return false;
  } else if (
    Lista.some(
      (tarea) => tarea.nombre.toLowerCase() === txtIngresado.toLowerCase() // CORRECCIÓN: Es toLowerCase(), no toLowerCasee()
    )
  ) {
    alert("Esta tarea ya existe");
    return false;
  } else {
    return true;
  }
};

// inyecto codigo
const CrearTarea = (tarea) => {
  return `<li>
             ${tarea.nombre}<img
             class="delete-btn"
             src="./img/delete.svg"
             alt="boton de borrar"
             data-id="${tarea.id}"
           />
         </li>`;
};

const inyectarHtml = () => {
  listaDeTareas.innerHTML = Lista.map((tarea) => CrearTarea(tarea)).join("");
  console.log("tareacreada");
};

function init() {
  document.addEventListener("DOMContentLoaded", inyectarHtml);
  addForm.addEventListener("submit", AddList);
  document.addEventListener("DOMContentLoaded", btnDeletehiden);
  btnEliminarTodo.addEventListener("click", EliminarTodo);
  listaDeTareas.addEventListener("click", Eliminar);
}

const btnDeletehiden = () => {
  if (!Lista.length) {
    btnEliminarTodo.classList.add("hidden");
    return;
  } else {
    btnEliminarTodo.classList.remove("hidden");
    return;
  }
};

// Eliminar un elemento
const Eliminar = (e) => {
  if (!e.target.classList.contains("delete-btn")) return; // Corregido container a contains
  console.log(e.target);

  const filterId = Number(e.target.dataset.id);
  Lista = Lista.filter((tarea) => tarea.id !== filterId);
  inyectarHtml(); // CORRECCIÓN: Debe llamarse como función
  btnDeletehiden();
  LocalStorage();
};

const EliminarTodo = () => {
  Lista = [];
  inyectarHtml(); // CORRECCIÓN: Debe llamarse como función
  btnDeletehiden();
  console.log("estoy aca");
  LocalStorage();
};

init();
