// opción 1 para importar todo
import * as funciones from "./funciones.js";
console.log(despedir("pepe"))

// importar solo lo que necesitamos
import { saludar } from "./funciones";
console.log(saludar("Pepe")); // Hola Pepe

// importar una función especifica es la mas usada 
import { saludar,despedir,sumar } from "./funciones.js";
console.log(saludar("persona 1")); 
console.log(despedir("persona 2"));
console.log(sumar(2,3));

import _ from "lodash";