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

//Practica 3 DOM
//EJERCICIO 1
let elementA = document.getElementsByTagName("a").length;

console.log(elementA);

//EJERCICIO 2
let body = document.getElementsByTagName("body");
let texto = document.getElementById("parrafo");
let imagen = document.createElement("img");
imagen.setAttribute(
  "src",
  "/img/cherry-blossoms-in-spring-4a3alz4ak7x9q6gy.jpg"
);
body[0].insertBefore(imagen, texto);
