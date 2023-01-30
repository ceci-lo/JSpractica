console.log("hello world!");
//EJERCICIOS OPTATIVOS JS1

//ejercicio 1
let nombre = "";
let apellidos = "";
let edad = 0;

//nombre = prompt("ingrese su nombre");
//apellidos = prompt("ingrese su apellido");
//edad = prompt("ingrese su edad");
console.log(
  "se llama " + nombre + " se apellida " + apellidos + " su edad es de " + edad
);

//ejercicio 2
let usuario = "marta";
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
validar();
