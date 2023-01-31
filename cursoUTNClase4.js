// con el DOM tomamos elementos del html para manipularlos atravez de js
//acciones, eventos, altrar html
// 1. llamar al nodo para que busque y traiga el elemento del html
// 2. utilizarlo para lo que se necesite

// 1. metodos para llamar al nodo
// para buscar por tipo de etiqueta
// getElementByTagName => me devuelve un array de elementos

let arrayTitulos = document.getElementsByTagName("h1");

let titulo1 = arrayTitulos[0]; // se utilizan los indices para accedera los elementos del array

// acceder al nodo por el id
// getElementById => me devuelve
let texto = document.getElementById("parrafo");
console.log(texto);

//para traer varios elementos distintos que comparten la clase
let conjuntoEtiqueta = document.getElementsByClassName("padre");

//querySelector => busca sus elementos segun su selector
//me trae el primer elemento que encuentre

//console.dir => me da informacion del nodo para poder alterarlas
