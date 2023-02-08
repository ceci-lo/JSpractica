//condicion
//operador ternario
//condicion ? accionTrue : accionFalse;

//if-else (evalua una condicion, si se cumple sigue un camino o no)
//si el usuario es mayor

let edad = 16;
let adulto = true;
if (edad > 18 || adulto == true) {
  console.log("tiene acceso al sitio");
} else {
  console.log("necesitas un adulto responsanble para ingresar");
}

let listaInscripto = [
  { nombre: "Ana", apellido: "Perez" },
  {
    nombre: "Alan",
    apellido: "Ruiz",
  },
];
let inscripcion = () => {
  let nombreInscripto = prompt("Ingrese su nombre");
  let apellidoInscripto = prompt("Ingrese su apellido");
  for (inscripto of listaInscripto) {
    if (
      inscripto.nombre == nombreInscripto &&
      inscripto.apellido == apellidoInscripto
    ) {
      console.log("Usted ya esta inscripto");
    }
  }
  //se crea un objeto al que le paso ewste array
  listaInscripto.push({ nombre: nombreInscripto, apellido: apellidoInscripto });
};
inscripcion();
