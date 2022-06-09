let vacias: number = 0;
let ocupadas: number = 0;
let cantButacas: number;
cantButacas = Number(prompt("Ingrese la cantidad de butacas")); //pide al usuario ingresar cantidades de butacas

let butacas: boolean[] = new Array(cantButacas); //defino el array

//----------------------------------------------
//funcion para cargar el arreglo con booleanos
function cargarArrayRandomBoolean(vector: boolean[], cantButacas: number) {
  for (let indice = 0; indice < cantButacas; indice++) {
    vector[indice] = Boolean(Math.floor(Math.random() * 2));
  }
  return vector;
}
//-------------------------------------

console.log(cargarArrayRandomBoolean(butacas, cantButacas)); //muestra el arreglo cargado

//-------------------------------------------
//funcion que verifica las cantidades de asientos ocupados y vacios
function verificarButacas(vector: boolean[]) {
  for (let indice = 0; indice < cantButacas; indice++) {
    if (vector[indice] === true) {
      ocupadas += 1;
    } else {
      vacias += 1;
    }
  }
}
//---------------------------------------------
verificarButacas(butacas);
console.log("Butacas ocupadas: " + ocupadas);
console.log("Butacas vacias: " + vacias);
