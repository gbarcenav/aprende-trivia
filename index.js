// NAVBAR
const btnBack = document.getElementById("back");
const logoSecond = document.getElementById("logo-second");
const principalLogo = document.getElementById("principal-logo");

// SECCIONES
const welcomeSection = document.getElementById("welcome");
const homeSection = document.getElementById("home");

// IMPRIMIR NOMBRE
const inputName = document.getElementById("input-name");
const btnName = document.getElementById("btn-welcome-name");
const nameSpace = document.getElementById("name-space");

// Cuenta regresiva
const element = document.getElementById("countdown");
// time es igual a los milisegundos en un segundo
let time = 1000;

// SECCIÓN BIENVENIDA
const btnGetName = document.getElementById("btn-welcome-name");

// Pasar a sección HOME
btnGetName.addEventListener("click", getName);

// SECCIÓN HOME
// Elegir tipo de preguntas
const btnColors = document.getElementById("btn-colors");
const btnAnimals = document.getElementById("btn-animals");
const questionColor = document.getElementById("q-color");
const imgColors = document.getElementById("colors-img");
const exitBtn = document.getElementById("exit");
const questionAnimals = document.getElementById("q-animals");

btnColors.addEventListener("click", goColorsSection);

// Ir a sección de preguntas sobre animales

// const goAnimalsSection = () => {
//   homeSection.classList.add("hidde-section");
//   questionAnimals.classList.remove("hidde-section");
//   btnBack.classList.add("hidde-btn");
//   exitBtn.classList.remove("hidde-btn");
//   imgAnimals.classList.remove("hidde-figure");
// };

// btnAnimals.addEventListener("click", goAnimalsSection);

// se define la catidad de segundos que va a durar nuestra cuenta regresiva

btnColors.addEventListener("click", e => {
  goColorsSection;
  if (e) countdown(10);
});
