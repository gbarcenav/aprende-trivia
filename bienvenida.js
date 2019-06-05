function recogeDatos(evento) {
  evento.preventDefault();
  var nombre = document.querySelector("#nombre").value;
  var hola = document.querySelector("#hola");
  var mensaje = "<p>¡Hola, " + nombre + "!</p>";

  hola.innerHTML = mensaje;
}

var miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogeDatos);

function escogeCategoria(evento) {
  evento.preventDefault();
  var categoriaColores = document.querySelector(".colores");
  var categoriaAnimales = document.querySelector(".animales");
}

var botonColores = document.querySelector("#colores");
var botonAnimales = document.querySelector("#animales");

botonColores.addEventListener("submit", escogeCategoria);

preguntaUnoC.addEventListener("submit", () => {
  var respuesta = preguntaUnoC.value;
  if (respuesta === "azul") {
    count++;
  }
  console.log(count);
});

var colores = false;
var animales = true;

function iniciaColores() {
  animales = true;
  document.querySelector("#hola").classList.remove(visible);
  iniciar();
}

function iniciaAnimales() {
  animales = true;
  document.querySelector("#hola").classList.remove(visible);
  iniciar();
}
