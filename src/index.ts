let vacias: number = 0;
let ocupadas: number = 0;
let indice: number;

let cantButacas: number;
cantButacas = Number(prompt("Ingrese la cantidad de butacas")); //pide al usuario ingresar cantidades de butacas

let butacas: number[] = new Array(cantButacas); //defino el array

//----------------------------------------------
//funcion para cargar el arreglo con booleanos
function cargarArrayRandomBoolean(v: number, cantButacas: number) {
  for (let indice = 0; indice < cantButacas; indice++) {
    v[indice] = Boolean(Math.floor(Math.random() * 2));
  }
  return v;
}
//-------------------------------------

console.log(cargarArrayRandomBoolean(butacas, cantButacas));//muestra el arreglo cargado

//-------------------------------------------
//funcion que verifica las cantidades de asientos ocupados y vacios
function verificarButacas (cargarArrayRandomBoolean():number){
for (indice = 0; indice < cantButacas; indice++) {
  if (butacas[indice] == 1) {
    ocupadas += 1;
  } else {
    vacias += 1;
  }
}
console.log("Butacas ocupadas: " + ocupadas);
console.log("Butacas vacias: " + vacias);
}
//---------------------------------------------
verificarButacas(cargarArrayRandomBoolean);