// ? ejercicio 1

// Calcular un descuento pedir al usuario que ingrese el precio de un
// producto y el producto y retornar y el precio con descuento

// alert("Calculadora de Descuento");

// // Solicitar el nombre del producto
// const producto = prompt("Ingrese el nombre de un producto");

// // Solicitar el precio del producto y asegurarse de convertirlo a un número
// const precio = parseFloat(prompt("Ingrese el precio del producto"));

// // Solicitar el porcentaje de descuento y asegurarse de convertirlo a un número
// const porcentajeDescuento = parseFloat(
//   prompt("Ingrese el porcentaje de descuento")
// );

// // Calcular el precio con descuento
// const descuento = (precio * porcentajeDescuento) / 100;
// const precioConDescuento = precio - descuento;

// console.log(
//   `El precio de ${producto} sin descuento es de $${precio.toFixed(
//     2
//   )} y el precio con descuento es de $${precioConDescuento.toFixed}.`
// );

// ? ejercicio 2

// Averiguar si el numero ingresado es positivo o negativo
// while (true) {
//   alert("Identificador de positivo o negativo. Presione 's' para salir");

//   const input = prompt("Ingrese un número (o 's' para salir)");

//   // Comprobar si el usuario desea salir
//   if (input.toLowerCase() === "s") {
//     break;
//   }

//   // Intentar convertir la entrada a un número
//   const numero = parseFloat(input);

//   // Verificar si la entrada es un número válido
//   if (isNaN(numero)) {
//     alert("Por favor, ingrese un número válido.");
//     continue;
//   }

//   const resultado = IdentificadorDeNumeros(numero);
//   switch (resultado) {
//     case 0:
//       alert("Este número es 0. No es positivo ni negativo.");
//       break;
//     case 1:
//       alert("Este número es positivo.");
//       break;
//     case -1:
//       alert("Este número es negativo.");
//       break;
//     default:
//       alert("Error en la identificación del número.");
//   }
// }

// function IdentificadorDeNumeros(numero) {
//   if (numero === 0) {
//     return 0;
//   } else if (numero > 0) {
//     return 1;
//   } else {
//     return -1;
//   }
// }

// for (let i = 1; i <= 10; i++)
//     {
//         console.log(i); // Esto imprimirá los números del 1 al 10 en la consola.
//     }

// for(let I =1 ; I <=10; i++)
//     {
//         console.log(I)
//     }

for (let I = 10; I >= 0; I--) {
  console.log(I);
}

const nombres = [
  "Ana",
  "Luis",
  "Carlos",
  "Marta",
  "Juan",
  "Lucía",
  "Pedro",
  "Elena",
  "Miguel",
  "Sofía",
];

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

for (var i = 0; nombres.length; i++) {}
