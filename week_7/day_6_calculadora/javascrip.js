// const pantalla = document.getElementById("Pantalla");

// const boton_c = document.getElementById("boton_c");
// const boton_parentesis = document.getElementById("boton_parentesis");
// const boton_porcentaje = document.getElementById("boton_porcentaje");
// const boton_division = document.getElementById("boton_division");
// const boton_siete = document.getElementById("boton_siete");
// const boton_ocho = document.getElementById("boton_ocho");
// const boton_nueve = document.getElementById("boton_nueve");
// const boton_por = document.getElementById("boton_por");
// const boton_cuatro = document.getElementById("boton_cuatro");
// const boton_cinco = document.getElementById("boton_cinco");
// const boton_seis = document.getElementById("boton_seis");
// const boton_menos = document.getElementById("boton_menos");
// const boton_uno = document.getElementById("boton_uno");
// const boton_dos = document.getElementById("boton_dos");
// const boton_tres = document.getElementById("boton_tres");
// const boton_suma = document.getElementById("boton_suma");
// const boton_mas_menos = document.getElementById("boton_mas_menos");
// const boton_cero = document.getElementById("boton_cero");
// const boton_punto = document.getElementById("boton_punto");
// const boton_igual = document.getElementById("boton_igual");

// boton_c.addEventListener("click", () =>
//   TextoPantalla((pantalla.textContent = ""))
// );
// boton_parentesis.addEventListener("click", () => TextoPantalla("()"));
// boton_porcentaje.addEventListener("click", () => TextoPantalla("%"));
// boton_division.addEventListener("click", () => TextoPantalla("÷"));
// boton_siete.addEventListener("click", () => TextoPantalla("7"));
// boton_ocho.addEventListener("click", () => TextoPantalla("8"));
// boton_nueve.addEventListener("click", () => TextoPantalla("9"));
// boton_por.addEventListener("click", () => TextoPantalla("X"));
// boton_cuatro.addEventListener("click", () => TextoPantalla("4"));
// boton_cinco.addEventListener("click", () => TextoPantalla("5"));
// boton_seis.addEventListener("click", () => TextoPantalla("6"));
// boton_menos.addEventListener("click", () => TextoPantalla("-"));
// boton_uno.addEventListener("click", () => TextoPantalla("1"));
// boton_dos.addEventListener("click", () => TextoPantalla("2"));
// boton_tres.addEventListener("click", () => TextoPantalla("3"));
// boton_suma.addEventListener("click", () => TextoPantalla("+"));
// boton_mas_menos.addEventListener("click", () => TextoPantalla("+/-"));
// boton_cero.addEventListener("click", () => TextoPantalla("0"));
// boton_punto.addEventListener("click", () => TextoPantalla("."));
// boton_igual.addEventListener("click", () => TextoPantalla(calcular()));

// function TextoPantalla(texto) {
//   pantalla.textContent += texto;
// }

// // ecuaciones
// function sumar(numero1, numero2) {
//   const casteo_Float = parseFloat(numero1);
//   const casteo_Float2 = parseFloat(numero2);
//   const resultado = casteo_Float + casteo_Float2;
//   return resultado;
// }

// function restar(numero1, numero2) {
//   const casteo_Float = parseFloat(numero1);
//   const casteo_Float2 = parseFloat(numero2);
//   const resultado = casteo_Float - casteo_Float2;
//   return resultado;
// }

// function multiplicar(numero1, numero2) {
//   const casteo_Float = parseFloat(numero1);
//   const casteo_Float2 = parseFloat(numero2);
//   const resultado = casteo_Float * casteo_Float2;
//   return resultado;
// }

// function dividir(numero1, numero2) {
//   const casteo_Float = parseFloat(numero1);
//   const casteo_Float2 = parseFloat(numero2);
//   if (casteo_Float2 === 0) {
//     return "ERROR";
//   }
//   const resultado = casteo_Float / casteo_Float2;
//   return resultado;
// }

// //! cortar signos y numeros

// function SDivisionMultiplicasion(cadena) {
//   const listaNumeros = cadena.split(/[x\÷]/);
//   return listaNumeros;
// }

// function MatchSignosDivSum(cadena) {
//   // Extrae solo los signos x y ÷
//   let ListadeSignos = cadena.match(/[x\÷]/g);
//   return ListadeSignos || []; // Devuelve una lista vacía si no hay signos
// }

// function MatchSignosMasMenos(cadena) {
//   // Extrae solo los signos + y -
//   let ListadeSignos = cadena.match(/[+\-]/g);
//   return ListadeSignos || []; // Devuelve una lista vacía si no hay signos
// }

// function SSumaResta(cadena) {
//   const listaNumeros = cadena.split(/[+\-]/);
//   return listaNumeros;
// }

// // ! ecuadiones de prueba

// let EMultiplicasionDivision = "12x2÷4x3÷2";

// let ECalculosConvinados = "12+4x43÷2";

// let ESumaResta = "12+45+14-54+5";

// const ecuasionconvinada = "12+2-1x2";

// function Identificar(cadena) {
//   const regexPlus = /\+/;
//   const regexminus = /\-/;
//   const regexX = /x/;
//   const regexdivision = /÷/;

//   if (
//     regexPlus.test(cadena) ||
//     (regexminus.test(cadena) && regexX.test(cadena)) ||
//     regexdivision.test(cadena)
//   ) {
//     return 0;
//   } else if (regexPlus.test(cadena) || regexminus.test(cadena)) {
//     return 1;
//   } else if (regexX.test(cadena) || regexX.test(cadena)) {
//     return 2;
//   } else {
//     return -1;
//   }
// }

// function resolverEcuasiones(cadena) {
//   let listaNumeros = SSumaResta(cadena);
//   let ListadeSignos = MatchSignosMasMenos(cadena);

//   switch (Identificar(cadena)) {
//     case 0: {
//       return REcuasionConvinada(cadena);
//     }
//     case 1: {
//       console.log("estoy aca");
//       return RsumaResta(listaNumeros, ListadeSignos);
//     }
//     case 2: {
//       return RdivisionMultiplicacion(cadena);
//     }
//     case -1: {
//       return "error";
//     }
//   }
// }

// function calcular() {
//   return (pantalla.textContent = resolverEcuasiones(pantalla.textContent));
// }

// function RdivisionMultiplicacion(calcularecuacion) {
//   let listaNumeros = SDivisionMultiplicasion(calcularecuacion);
//   let ListadeSignos = MatchSignosDivSum(calcularecuacion);

//   let acumulador = 0;
//   let bandera = false;

//   for (let i = 0; i < listaNumeros.length; i++) {
//     if (bandera) {
//       let primerElemento = ListadeSignos.shift();
//       if (primerElemento == "x") {
//         acumulador = multiplicar(acumulador, parseFloat(listaNumeros[i]));
//       } else if (primerElemento == "÷") {
//         acumulador = dividir(acumulador, parseFloat(listaNumeros[i]));
//       }
//     } else {
//       bandera = true;
//       acumulador = parseFloat(listaNumeros[i]);
//     }
//   }
//   console.log(acumulador);
//   console.log("acumulador");
//   return acumulador;
// }

// function RsumaResta(listaNumeros, ListadeSignos) {
//   let acumulador = 0;
//   let bandera = false;

//   console.log(listaNumeros);
//   console.log(ListadeSignos);

//   for (let i = 0; i < listaNumeros.length; i++) {
//     if (bandera) {
//       let primerElemento = ListadeSignos.shift();
//       if (primerElemento == "+") {
//         acumulador = sumar(acumulador, parseFloat(listaNumeros[i]));
//         console.log("suma");
//       } else if (primerElemento == "-") {
//         acumulador = restar(acumulador, parseFloat(listaNumeros[i]));
//         console.log("resta");
//       }
//     } else {
//       bandera = true;
//       acumulador = parseFloat(listaNumeros[i]);
//     }
//   }
//   console.log(acumulador);
//   console.log("acumulador");
//   return acumulador;
// }

// function REcuasionConvinada(params) {
//   let lista = SSumaResta(params);
//   let ListadeSignos = MatchSignosMasMenos(params);
//   console.log(lista);
//   let listaDeResultados = [];
//   for (let i = 0; i < lista.length; i++) {
//     if (Identificar(lista[i] == 1)) {
//       listaDeResultados.push(RdivisionMultiplicacion(lista[i]));
//       console.log(lista[i]);
//       console.log("entro al if");
//     } else {
//       listaDeResultados.push(lista[i]);
//       console.log("esta fuera del if");
//     }
//   }
//   console.log(listaDeResultados);
//   return RsumaResta(listaDeResultados, ListadeSignos);
// }

// const pantalla = document.getElementById("Pantalla");

// const boton_c = document.getElementById("boton_c");
// const boton_parentesis = document.getElementById("boton_parentesis");
// const boton_porcentaje = document.getElementById("boton_porcentaje");
// const boton_division = document.getElementById("boton_division");
// const boton_siete = document.getElementById("boton_siete");
// const boton_ocho = document.getElementById("boton_ocho");
// const boton_nueve = document.getElementById("boton_nueve");
// const boton_por = document.getElementById("boton_por");
// const boton_cuatro = document.getElementById("boton_cuatro");
// const boton_cinco = document.getElementById("boton_cinco");
// const boton_seis = document.getElementById("boton_seis");
// const boton_menos = document.getElementById("boton_menos");
// const boton_uno = document.getElementById("boton_uno");
// const boton_dos = document.getElementById("boton_dos");
// const boton_tres = document.getElementById("boton_tres");
// const boton_suma = document.getElementById("boton_suma");
// const boton_mas_menos = document.getElementById("boton_mas_menos");
// const boton_cero = document.getElementById("boton_cero");
// const boton_punto = document.getElementById("boton_punto");
// const boton_igual = document.getElementById("boton_igual");

// boton_c.addEventListener("click", () => (pantalla.textContent = ""));
// boton_parentesis.addEventListener("click", () => TextoPantalla("()"));
// boton_porcentaje.addEventListener("click", () => TextoPantalla("%"));
// boton_division.addEventListener("click", () => TextoPantalla("÷"));
// boton_siete.addEventListener("click", () => TextoPantalla("7"));
// boton_ocho.addEventListener("click", () => TextoPantalla("8"));
// boton_nueve.addEventListener("click", () => TextoPantalla("9"));
// boton_por.addEventListener("click", () => TextoPantalla("x"));
// boton_cuatro.addEventListener("click", () => TextoPantalla("4"));
// boton_cinco.addEventListener("click", () => TextoPantalla("5"));
// boton_seis.addEventListener("click", () => TextoPantalla("6"));
// boton_menos.addEventListener("click", () => TextoPantalla("-"));
// boton_uno.addEventListener("click", () => TextoPantalla("1"));
// boton_dos.addEventListener("click", () => TextoPantalla("2"));
// boton_tres.addEventListener("click", () => TextoPantalla("3"));
// boton_suma.addEventListener("click", () => TextoPantalla("+"));
// boton_mas_menos.addEventListener("click", () => TextoPantalla("+/-"));
// boton_cero.addEventListener("click", () => TextoPantalla("0"));
// boton_punto.addEventListener("click", () => TextoPantalla("."));
// boton_igual.addEventListener("click", () => TextoPantalla(calcular()));

// function TextoPantalla(texto) {
//   pantalla.textContent += texto;
// }

// // ecuaciones
// function sumar(numero1, numero2) {
//   return parseFloat(numero1) + parseFloat(numero2);
// }

// function restar(numero1, numero2) {
//   return parseFloat(numero1) - parseFloat(numero2);
// }

// function multiplicar(numero1, numero2) {
//   return parseFloat(numero1) * parseFloat(numero2);
// }

// function dividir(numero1, numero2) {
//   if (parseFloat(numero2) === 0) {
//     return "ERROR";
//   }
//   return parseFloat(numero1) / parseFloat(numero2);
// }

// // Partición de signos y números
// function SDivisionMultiplicasion(cadena) {
//   return cadena.split(/[x÷]/);
// }

// function MatchSignosDivSum(cadena) {
//   return cadena.match(/[x÷]/g) || [];
// }

// function MatchSignosMasMenos(cadena) {
//   return cadena.match(/[+\-]/g) || [];
// }

// function SSumaResta(cadena) {
//   return cadena.split(/[+\-]/);
// }

// function Identificar(cadena) {
//   const regexPlusMinus = /[+\-]/;
//   const regexMulDiv = /[x÷]/;

//   if (regexPlusMinus.test(cadena) && regexMulDiv.test(cadena)) {
//     return 0;
//   } else if (regexPlusMinus.test(cadena)) {
//     return 1;
//   } else if (regexMulDiv.test(cadena)) {
//     return 2;
//   } else {
//     return -1;
//   }
// }

// function resolverEcuasiones(cadena) {
//   switch (Identificar(cadena)) {
//     case 0:
//       return REcuasionConvinada(cadena);
//     case 1:
//       return RsumaResta(SSumaResta(cadena), MatchSignosMasMenos(cadena));
//     case 2:
//       return RdivisionMultiplicacion(cadena);
//     default:
//       return "ERROR";
//   }
// }

// function calcular() {
//   let resultado = resolverEcuasiones(pantalla.textContent);
//   pantalla.textContent = "";
//   return resultado;
// }

// function RdivisionMultiplicacion(cadena) {
//   const listaNumeros = SDivisionMultiplicasion(cadena);
//   const ListadeSignos = MatchSignosDivSum(cadena);
//   let acumulador = parseFloat(listaNumeros[0]);

//   for (let i = 1; i < listaNumeros.length; i++) {
//     let signo = ListadeSignos.shift();
//     if (signo === "x") {
//       acumulador = multiplicar(acumulador, parseFloat(listaNumeros[i]));
//     } else if (signo === "÷") {
//       acumulador = dividir(acumulador, parseFloat(listaNumeros[i]));
//     }
//   }
//   return acumulador;
// }

// function RsumaResta(listaNumeros, ListadeSignos) {
//   let acumulador = parseFloat(listaNumeros[0]);

//   for (let i = 1; i < listaNumeros.length; i++) {
//     let signo = ListadeSignos.shift();
//     if (signo === "+") {
//       acumulador = sumar(acumulador, parseFloat(listaNumeros[i]));
//     } else if (signo === "-") {
//       acumulador = restar(acumulador, parseFloat(listaNumeros[i]));
//     }
//   }
//   return acumulador;
// }

// function REcuasionConvinada(cadena) {
//   let lista = SSumaResta(cadena);
//   let ListadeSignos = MatchSignosMasMenos(cadena);
//   let listaDeResultados = lista.map((subCadena) => {
//     if (Identificar(subCadena) === 2) {
//       return RdivisionMultiplicacion(subCadena);
//     } else {
//       return subCadena;
//     }
//   });
//   return RsumaResta(listaDeResultados, ListadeSignos);
// }

const pantalla = document.getElementById("Pantalla");

const boton_c = document.getElementById("boton_c");
const boton_parentesis = document.getElementById("boton_parentesis");
const boton_porcentaje = document.getElementById("boton_porcentaje");
const boton_division = document.getElementById("boton_division");
const boton_siete = document.getElementById("boton_siete");
const boton_ocho = document.getElementById("boton_ocho");
const boton_nueve = document.getElementById("boton_nueve");
const boton_por = document.getElementById("boton_por");
const boton_cuatro = document.getElementById("boton_cuatro");
const boton_cinco = document.getElementById("boton_cinco");
const boton_seis = document.getElementById("boton_seis");
const boton_menos = document.getElementById("boton_menos");
const boton_uno = document.getElementById("boton_uno");
const boton_dos = document.getElementById("boton_dos");
const boton_tres = document.getElementById("boton_tres");
const boton_suma = document.getElementById("boton_suma");
const boton_mas_menos = document.getElementById("boton_mas_menos");
const boton_cero = document.getElementById("boton_cero");
const boton_punto = document.getElementById("boton_punto");
const boton_igual = document.getElementById("boton_igual");

let resultadoMostrado = false;

boton_c.addEventListener("click", () => {
  pantalla.textContent = "";
  resultadoMostrado = false;
});
boton_parentesis.addEventListener("click", () => TextoPantalla("()"));
boton_porcentaje.addEventListener("click", () => TextoPantalla("%"));
boton_division.addEventListener("click", () => TextoPantalla("÷"));
boton_siete.addEventListener("click", () => TextoPantalla("7"));
boton_ocho.addEventListener("click", () => TextoPantalla("8"));
boton_nueve.addEventListener("click", () => TextoPantalla("9"));
boton_por.addEventListener("click", () => TextoPantalla("x"));
boton_cuatro.addEventListener("click", () => TextoPantalla("4"));
boton_cinco.addEventListener("click", () => TextoPantalla("5"));
boton_seis.addEventListener("click", () => TextoPantalla("6"));
boton_menos.addEventListener("click", () => TextoPantalla("-"));
boton_uno.addEventListener("click", () => TextoPantalla("1"));
boton_dos.addEventListener("click", () => TextoPantalla("2"));
boton_tres.addEventListener("click", () => TextoPantalla("3"));
boton_suma.addEventListener("click", () => TextoPantalla("+"));
boton_mas_menos.addEventListener("click", () => TextoPantalla("+/-"));
boton_cero.addEventListener("click", () => TextoPantalla("0"));
boton_punto.addEventListener("click", () => TextoPantalla("."));
boton_igual.addEventListener("click", () => {
  pantalla.textContent = calcular();
  resultadoMostrado = true;
});

function TextoPantalla(texto) {
  if (resultadoMostrado) {
    pantalla.textContent = "";
    resultadoMostrado = false;
  }
  pantalla.textContent += texto;
}

// ecuaciones
function sumar(numero1, numero2) {
  return parseFloat(numero1) + parseFloat(numero2);
}

function restar(numero1, numero2) {
  return parseFloat(numero1) - parseFloat(numero2);
}

function multiplicar(numero1, numero2) {
  return parseFloat(numero1) * parseFloat(numero2);
}

function dividir(numero1, numero2) {
  if (parseFloat(numero2) === 0) {
    return "ERROR";
  }
  return parseFloat(numero1) / parseFloat(numero2);
}

// Partición de signos y números
function SDivisionMultiplicasion(cadena) {
  return cadena.split(/[x÷]/);
}

function MatchSignosDivSum(cadena) {
  return cadena.match(/[x÷]/g) || [];
}

function MatchSignosMasMenos(cadena) {
  return cadena.match(/[+\-]/g) || [];
}

function SSumaResta(cadena) {
  return cadena.split(/[+\-]/);
}

function Identificar(cadena) {
  const regexPlusMinus = /[+\-]/;
  const regexMulDiv = /[x÷]/;

  if (regexPlusMinus.test(cadena) && regexMulDiv.test(cadena)) {
    return 0;
  } else if (regexPlusMinus.test(cadena)) {
    return 1;
  } else if (regexMulDiv.test(cadena)) {
    return 2;
  } else {
    return -1;
  }
}

function resolverEcuasiones(cadena) {
  switch (Identificar(cadena)) {
    case 0:
      return REcuasionConvinada(cadena);
    case 1:
      return RsumaResta(SSumaResta(cadena), MatchSignosMasMenos(cadena));
    case 2:
      return RdivisionMultiplicacion(cadena);
    default:
      return "ERROR";
  }
}

function calcular() {
  return resolverEcuasiones(pantalla.textContent);
}

function RdivisionMultiplicacion(cadena) {
  const listaNumeros = SDivisionMultiplicasion(cadena);
  const ListadeSignos = MatchSignosDivSum(cadena);
  let acumulador = parseFloat(listaNumeros[0]);

  for (let i = 1; i < listaNumeros.length; i++) {
    let signo = ListadeSignos.shift();
    if (signo === "x") {
      acumulador = multiplicar(acumulador, parseFloat(listaNumeros[i]));
    } else if (signo === "÷") {
      acumulador = dividir(acumulador, parseFloat(listaNumeros[i]));
    }
  }
  return acumulador;
}

function RsumaResta(listaNumeros, ListadeSignos) {
  let acumulador = parseFloat(listaNumeros[0]);

  for (let i = 1; i < listaNumeros.length; i++) {
    let signo = ListadeSignos.shift();
    if (signo === "+") {
      acumulador = sumar(acumulador, parseFloat(listaNumeros[i]));
    } else if (signo === "-") {
      acumulador = restar(acumulador, parseFloat(listaNumeros[i]));
    }
  }
  return acumulador;
}

function REcuasionConvinada(cadena) {
  let lista = SSumaResta(cadena);
  let ListadeSignos = MatchSignosMasMenos(cadena);
  let listaDeResultados = lista.map((subCadena) => {
    if (Identificar(subCadena) === 2) {
      return RdivisionMultiplicacion(subCadena);
    } else {
      return subCadena;
    }
  });
  return RsumaResta(listaDeResultados, ListadeSignos);
}
