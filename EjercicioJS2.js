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
