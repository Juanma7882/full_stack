const container = document.getElementsByClassName("container");

for (var i = 0; i < container.length; i++) {
  // Realiza alguna acción con cada elemento
  console.log(container[i]);
}

const parrafo = document.getElementById("texto");

parrafo.addEventListener("click", () => (parrafo.style.color = "blue"));
parrafo.addEventListener("click", () => (parrafo.style.backgroundSize = 18));
