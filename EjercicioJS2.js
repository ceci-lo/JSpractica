// EJERCICIOS OPTATIVOS JS 2 CURSO UTN

//EJERCICIO 1
let listaSuper = () => {
  let listaSuper = [];
  let cargar = true;

  while (cargar) {
    let producto = prompt(
      "Ingrese productos a comprar o Escriba finalizar para dejar de cargar"
    );
    if (producto.toLowerCase() == "finalizar") {
      cargar = false;
    } else {
      listaSuper.push(producto);
    }
  }
  return console.log("Lista Super" + listaSuper);
};

//EJERCICIO 2
let eliminaAzul = () => {
  let colores = ["amarillo", "verde", "azul", "naranja", "celeste"];

  for (let index = 0; index < colores.length; index++) {
    const element = colores[index];
    if (element == "azul") {
      colores.splice(index, 1);
    }
  }
};

//EJERCICIO 3
var mascotas = ["perro", "gato", "peces"];

mascotas.push("canario");
console.log(mascotas[0]); // primer elemento del array
console.log(mascotas.length); //el ultimo elemento del array tiene indice 3
console.log(mascotas);
