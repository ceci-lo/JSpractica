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



//EJERCICIO 2
let body = document.getElementsByTagName("body");
let texto = document.getElementById("parrafo");
let imagen = document.createElement("img");
imagen.setAttribute(
  "src",
  "/img/cherry-blossoms-in-spring-4a3alz4ak7x9q6gy.jpg"
);
body[0].insertBefore(imagen, texto);

//EJERCICIO 3
texto.innerHTML = (' Documentos es una interfaz entre JavaScript y HTML o XML (otro metalenguaje que no abordamos en este curso). Nos permite acceder a sus partes y propiedades e ir interactuando con ellas.</br>Tenemos que tener en cuenta que cuando hablamos de propiedades de las partes del HTML estamos  hablando de su CSS por lo que el DOM nos va a permitir modificar el CSS también, por medio de HTML')

//EJERCICIO4
// primera forma 
/*let ul = document.getElementById("listado"); 
ul.className = "menu"*/

//segunda forma
let menu = document.getElementsByTagName("ul");
menu[0].classList.add("menu")

// EJERCICIO 5
let tituloNuevo = document.getElementsByTagName("h1");
tituloNuevo[0].innerHTML = 'Introducción del DOM' // también funciona con textContent

// EJERCICIO 6
let metodos =["createElement()","appendChild()", "insertBefore()", "removeChild()","replaceChild()", "removeAttribute()","classList.add()","classList.remove()","classList.toggle()"]

let h2 = document.getElementsByTagName("h2");
 let ul = document.createElement("ul");
for(let element of metodos){
 let listado = document.createElement("li");
  let txt = document.createTextNode(element);

listado.appendChild(txt);
ul.appendChild(listado);

h2[0].insertBefore(ul, null);
 
}

