const card = document.createElement("div");

card.classList.add("card");

const cardImg = document.createElement("img");
cardImg.src = "https://via.placeholder.com/150";

cardImg.classList.add("card-img");

const cardTitle = document.createElement("hj");
cardTitle.classList.add("card-title");
cardTitle.innerText = "Titulo de sla tarjeta";

const cardBody = document.createElement("div");
cardBody.classList.add("card-body");
cardBody.innerText = "contenido de la targeta";

const cardButton = document.createElement("button");
cardButton.classList.add("card-button");
cardButton.innerText = "Accion";

card.appendChild(cardImg);
card.appendChild(cardTitle);
card.appendChild(cardBody);
card.appendChild(cardButton);

const cardContainer = document.createElement("div");
cardContainer.appendChild(card);

// document.body.appendChild(cardContainer);

const main = document.querySelector("main");
main.appendChild(cardContainer);

const tituloAzul = document.querySelector(".caja");
tituloAzul.innerHTML = "<h1 class ='titulo' id='javasid'>  pagina</h1>";

document.getElementById("javasid").addEventListener("click", function () {
  var titulo = document.getElementById("javasid");
  titulo.classList.toggle("nueva-clase-titulo");
  //   titulo.classList.add("nueva-clase-titulo");
});

// cards_container

const cards_container = document.querySelector(".cards_container");

const animalesObj = [
  {
    name: "Perro",
    description: "Ladra",
  },
  {
    name: "Gato",
    description: "Maulla",
  },
  {
    name: "Pez",
    description: "Nada",
  },
];

const cuerpocard = (animal) => {
  const { name, description } = animal;

  return `
    <div class='card'>
      <h3 class="card-title">${name}</h3>
      <p>${description}</p>
    </div>
    `;
};

const cardsTemplate = animalesObj.map(cuerpocard).join("");

cards_container.innerHTML += cardsTemplate;

// ! usarjson

//! Json
// ? el parse nos permite trabajar con json al parssear el json
const jsonData = JSON.parse(`{
    "name": "juan",
    "age": 21,
    "numeros": [1, 2, 3, 4]
  }
  `);

console.log(jsonData);
// ? transforma objetos de js a json el stringify
console.log(JSON.stringify(jsonData));

//! LOCALSTORAGE
localStorage.setItem("usuario", "charmander");

//  Suponiendo que 'obj' es un objeto que quieres almacenar
const obj = { nombre: "Charmander", tipo: "Fuego" };
localStorage.setItem("charmander", JSON.stringify(obj));

//  Obtener datos del localstorage
const usuario = localStorage.getItem("usuario");
console.log(usuario);

const user = document.querySelector(".user");
user.innerHTML = `El usuario es: ${usuario}`;

const $p = document.querySelector(".holi");
const objeto = localStorage.getItem("charmander");

if (objeto) {
  const holi = JSON.parse(objeto);
  // Puedes usar 'holi' ahora, por ejemplo:
  $p.innerHTML = `El nombre es: ${holi.nombre} y el tipo es: ${holi.tipo}`;
}

console.log(new Date());
