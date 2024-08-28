alert("esto es javacrip");

// var numero = 1;
// var numero2 = 2;
// console.log(numero + numero2);

var tex1 = "hello";
var tex2 = "word";
resultado = tex1 + tex2;
console.log(resultado);

let tipolet = "tipolet";
// ! no se puede redeclara una funicion tipo let
// let tipolet = "tipolet redeclarado"
// ? solo de esta forma se puede
tipolet = "tipolet redeclarado";
console.log(tipolet);

const soyunacontante = "constante ";
// las constantes no se pueden redeclarar de ninguna manera
console.log(soyunacontante);

// Operadores aritméticos:
// + : Suma
// - : Resta
// * : Multiplicación
// / : División
// % : Módulo (resto de la división)
// Operadores de asignación:
// = : Asignación
// += : Asignación de suma
// -= : Asignación de resta
// *= : Asignación de multiplicación
// /= : Asignación de división
// %= : Asignación de módulo
// Operadores de comparación:
// == : Igualdad (compara el valor)
// === : Igualdad estricta (compara valor y tipo)
// != : Diferente de (compara el valor)
// !== : Diferente de estricto (compara valor y tipo)
// > : Mayor que
// < : Menor que
// >= : Mayor o igual que
// <= : Menor o igual que
// Operadores lógicos:
// && : AND lógico
// || : OR lógico
// ! : NOT lógico
// Operadores de incremento/decremento:
// ++ : Incremento en 1
// -- : Decremento en 1
// Operadores de concatenación:
// + : Concatenación de cadenas
// Operador condicional (ternario):
// condición ? expresión1 : expresión2 : Si la condición es verdadera, devuelve expresión1, de lo contrario, devuelve expresión2.
// Operador de tipo:
// typeof : Devuelve el tipo de una variable
// Operadores de bit a bit (bitwise):
// & : AND a nivel de bits
// | : OR a nivel de bits
// ^ : XOR a nivel de bits
// ~ : NOT a nivel de bits
// << : Desplazamiento a la izquierda
// >> : Desplazamiento a la derecha con signo
// >>> : Desplazamiento a la derecha sin signo

const mensaje = prompt("ingrese su nombre");
// console.log("hola" + " " + mensaje);
console.log(`hola ${mensaje}`);
