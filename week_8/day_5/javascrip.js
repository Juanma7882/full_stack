console.log("estamos conectados");

//1) crear una funcion que reciba un numero por parametrro e indique en consola si el
//  numero  es par o inpar

const par = (numero) => {
  if (Number(numero) % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const IsEvent = (numero) => {
  if (numero === 0) {
    console.log("este numero es 0");
  } else if (par(numero)) {
    console.log("este numero es par");
  } else {
    console.log("este numero es inpar");
  }
};

IsEvent(2);

//2) Crear una funcion que reciba dos numeros por parametro e indique en consola que
//   numero es mayor, y si ninguno lo es, indicar por consola que son iguales

const numeroMyor = (numero1, numero2) => {
  if (numero1 > numero2) {
    console.log(`el numero ${numero1} es mayor al ${numero2}`);
  } else if (numero2 > numero1) {
    console.log(`el numero ${numero2} es mayor al ${numero1}`);
  } else {
    console.log(`son iguales`);
  }
};

numeroMyor(8, 5);

//3) Crear una funcion que reciva un numero por parametro e indique en consola si es
//      multiplo de 5

//4) Crear una funcion que recibe un numero por parametro e inprima por consola
// todos los numeros desde el 0 hasta llegar a ese numero

const contadorNumeros = (numero) => {
  for (let i = 0; i < numero + 1; i++) {
    console.log(i);
  }
};

//5) crear una funcion que reciba una palabra y un numero por parametro
// e inprima por consola esa palabra la cantidad correspondiente al numero indicado

const impresora = (palabra, numero) => {
  for (let i = 1; i <= numero; i++) {
    console.log(`${palabra} ${i} `);
  }
};
// impresora("hola", 5);

//6) crear una funcion que reciba un array por parametro e inprima por consola
// todos los valores de ese array

lista = ["pizza", "amburguesa", "empanadas"];

const impresionLista = (lista) => {
  lista.forEach((element) => {
    console.log(element);
  });
};

const personas = [
  { nombre: "Pablo", edad: 43, dni: "12345678", correo: "pablo@example.com" },
  { nombre: "María", edad: 29, dni: "87654321", correo: "maria@example.com" },
  { nombre: "Juan", edad: 35, dni: "23456789", correo: "juan@example.com" },
  { nombre: "Lucía", edad: 22, dni: "98765432", correo: "lucia@example.com" },
  { nombre: "Carlos", edad: 50, dni: "34567890", correo: "carlos@example.com" },
];

const impresionDiccionario = (lista) => {
  lista.forEach((element) => {
    if (element.edad % 2 === 0) {
      console.log(element.nombre);
    }
    // console.log(element.nombre);
  });
};

impresionDiccionario(personas);
