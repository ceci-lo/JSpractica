//EJERCICIO 1
const notas = () => {
  let nota = prompt("Ingrese una nota");

  if (nota == 9 || nota == 10) {
    alert("sobresaliente");
  } else if (nota == 8) {
    alert("notable");
  } else if (nota == 7) {
    alert("bien");
  } else if (nota == 6) {
    alert("suficiente");
  } else {
    alert("insuficiente");
  }
};

//EJERCICIO 2

const eligeAventura = () => {
  let comenzar = parseInt(prompt("1. Comenzar o 2. Salir"));

  if (comenzar == 1) {
    let puerta = parseInt(prompt("1. Abrir puerta A o 2. Abrir puerta B"));

    if (puerta == 2) {
      alert("Oh, Camino sin salida!");
    } else if (puerta == 1) {
      let tigre = parseInt(
        prompt(
          "Te has encontrado con un tigre elige 1. darle un pedazo de carne o 2.Cerrar la puerta o irse corriendo"
        )
      );
      if (tigre == 1) {
        alert("Felicitaciones!! El león se corre y encontramos el tesoro");
      } else if (tigre == 2) {
        alert("Adios!");
      }
    }
  }
};

//EJERCICIO 3

let cursos = [
  {
    nombreCurso: "Curso HTML5 y CSS3",
    descripcionDelCurso:
      "En este curso aprenderán sombre HTML5 y CSS3.Sus funcionalidade sy utilidad para realizar un sitio estático ",
    fechaDeInicio: "02/07/2022",
  },
  {
    nombreCurso: "Curso de LIderazgo",
    descripcionDelCurso:
      "En este curso aprenderán a como liderar un equipo y lograr buenos resultados de resolución de problemas.",
    fechaDeInicio: "10/03/2022",
  },
  {
    nombreCurso: "Curso de literatura en cuento",
    descripcionDelCurso:
      "En este curso aprenderán a como crear y redactar un cuento corto.",
    fechaDeInicio: "27/04/2022",
  },
  {
    nombreCurso: "Curso Profesional de ventas",
    descripcionDelCurso:
      "En este curso aprenderán todo lo necesario para convertirse en vendedores profesionales",
    fechaDeInicio: "01/08/2022",
  },
];

let mostrarCursos = () => {
  let body = document.getElementsByTagName("body");
  let texto = document.getElementById("parrafo");
  let p = document.createElement("p");
  let descripcionDelCurso = document.createElement("p");
  let fechaDeInicio = document.createElement("p");

  for (let i = 0; i < cursos.length; i++) {
    p.textContent = cursos[i].nombreCurso;
    descripcionDelCurso.textContent = cursos[i].descripcionDelCurso;
    fechaDeInicio.textContent = cursos[i].fechaDeInicio;

    body[0].insertBefore(p, texto);
    body[0].insertBefore(descripcionDelCurso, texto);
  }
  body[0].insertBefore(fechaDeInicio, texto);
};
