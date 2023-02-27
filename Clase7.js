console.log("hola");
//para captar la info desde el formulario
//eventos

//change - onchange
// detecta cualquier cambio se unsa en el input cada  vez que se haga un campbio
// se ejecuta una vez que se produce el cambio

const mostrarValor = (etiqueta) => {
  console.log(etiqueta.value);
};

//preventDefault() -> se aplica a etiqueta la accion por defecto queda anulada

//onsubmit - submit -> se encia info del formulario y va en la parte de etiqeuta form
const infoCompleta = (evento) => {
  evento.preventDefault(); // esto me permite que no me borre la info y captarla
  console.log(event);
};

// evento blur se fija si haces foco y despues salis no impora si escribis algo o no
const campoRequerido = (etiqueta) => {
  console.log("evento blur");
  if (etiqueta.required == true && etiqueta.value == "") {
    alert("campo obligatorio porfavor completar");
  }
};

const infoCompleta2 = (evento) => {
  evento.preventDefault();

  let elementosForm = document.forms[0].elements;
  // form me llamar a todos los formularios del html
  // esto me trae un array y por eso le pngo [0] accedo al primero
  //y me trae todos los elementos con el .elements

  for (elemento of elementosForm) {
    if (elemento.type != "submit") {
      elemento.value;
    }
  }

  evento.taget.reset(); // me borra la info cargada en el formulario
};
