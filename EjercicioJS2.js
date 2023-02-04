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
let mascotas = () => {
  var mascotas = ["perro", "gato", "peces"];

  mascotas.push("canario");
  console.log(mascotas[0]); // primer elemento del array
  console.log(mascotas.length); //el ultimo elemento del array tiene indice 3
  console.log(mascotas);
};

// EJERCICIO 4
let imprimirNombres = () => {
  let nombres = ["ana", "mary", "cora", "elena", "susan"];

  for (let index = 0; index < nombres.length; index++) {
    console.log(nombres[index]);
  }
};

//EJERCICIO 5

let sumaArray = () => {
  let numeros = [2, 3, 45, 100, 50];
  let suma = 0;

  for (let index = 0; index < numeros.length; index++) {
    suma += numeros[index];
  }

  return suma;
};

// EJERCICIO 6

let nombre = ["Juan", "Pedro", "Ana", "Maria", "Wally", "Sofia"];

nombre.indexOf("Wally"); //indice 4

function mostrarNombre() {
  for (let index = 0; index < nombre.length; index++) {
    console.log("indice: " + index + " Nombre: " + nombre[index]);
  }
}

function mostrarAWally() {
  for (let index = 0; index < nombre.length; index++) {
    if (nombre[index] == "Wally") {
      console.log("Wally esta en el indice " + index);
    }
  }
}
