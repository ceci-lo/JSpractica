console.log("hola mundo");
// eventos
//me permite interactuar con el usuario

// como atributo va en el html  y llama al archivo js

// click, paso de mouse, cambio
// en donde debe escucharlo
// que funcion tiene que hacer como respuesta a esa accion
// nodo.addEventListener(evento,funcionAejecutar)  (se toca el archivo js)

// usar eventos como funcion
let botonClick = document.querySelector(".botonClick"); //llame al boton

botonClick.addEventListener("click", () => {
  document.querySelector("h1").style.color = "red";
});

//funcion como parametro del evento
let otroBoton = document.getElementById("otroBoton");
const funcionResp = () => {
  otroBoton.style.backgroundColor = "blue";
};
otroBoton.addEventListener("click", funcionResp); //no agragar los parentesis a la funcion que s epasa como parametro por que se ejecuta sola

//como atributo
let sumarPan = () => {
  let texto = document.createElement("p");
  texto.textContent = "pan $100";
  let seccionCompra = document.querySelector(".listaPan");
  seccionCompra.appendChild(texto);
};

let parrafo = document.getElementById("texto");

parrafo.addEventListener("mouseover", () => {
  parrafo.style.color = "blue";
});
