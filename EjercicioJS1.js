console.log("hello world!");
//EJERCICIOS OPTATIVOS JS1

//ejercicio 1
let nombre = "";
let apellidos = "";
let edad = 0;

//nombre = prompt("ingrese su nombre");
//apellidos = prompt("ingrese su apellido");
//edad = prompt("ingrese su edad");

"se llama " + nombre + " se apellida " + apellidos + " su edad es de " + edad;

//ejercicio 2
/*let usuario = "marta";
let contraseña = "1234";

function validar() {
  let usuarioIngresado = prompt("ingrese su usuario");
  let constraingresada = prompt("ingrese su contraseña");
  if (usuarioIngresado == usuario && constraingresada == contraseña) {
    console.log("Correcto!");
  } else {
    alert("los datos son incorrectos!");
  }
}
validar();*/

//ejercicio 3
function dolar(peso) {
  let dolar = peso * 170;
  return dolar;
}

// ejercicio 4

/*function parOimpar() {
  let numero = prompt("ingrese un numero");
  if (numero % 2 == 0) {
    alert("el numero es par");
  } else {
    alert("el numero es impar");
  }
}
parOimpar();*/

//ejercicio 5

function promedio() {
  let count = 0;
  let suma = 0;

  while (count < 5) {
    let num = parseInt(prompt("ingrese un numero"));
    suma += num;
    count++;
  }

  return suma / count;
}

// Ejercicio 6
let validacionAdmiClient = () => {
  let user = "Cecilia";
  let password = "1234";

  let userIn = prompt("ingrese usuario");
  let passwordIn = prompt("ingrese contraseña");

  if (userIn == user && password == passwordIn) {
    let adminOClient = prompt("Es usted administrador o cliente");

    if (adminOClient.toLowerCase() == "administrador") {
      console.log("tiene acceso a todos los campos");
    } else if (adminOClient.toLowerCase() == "cliente") {
      console.log("tiene acceso limitado");
    }
  } else {
    console.log("datos incorrectos");
  }
};

//Ejemplo para crear un elemento en el body
// se inserta al cierre del elemento padre
// var titulo = document.getElementById("cuerpo");
// var textoNuevo = document.createElement("h2");
// titulo.appendChild(textoNuevo);

// // crear elemento en un lugar en especifico del dom
// var titulo1 = document.getElementById("titulo");
// var texto1 = document.querySelector("#parrafo");
// var textoNuevo2 = document.createElement("p");
// titulo1.insertBefore(textoNuevo2, texto1);
// textoNuevo2.textContent = "soy un nuevo elemento";

// titulo1.classList.toggle("tituloh1"); // le agrega el nombre de la clase al nodo
// titulo1.style.color = "blue"; // para cambiar el css del nodo
