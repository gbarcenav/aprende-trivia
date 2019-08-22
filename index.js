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

// SECCIÓN BIENVENIDA
const btnGetName = document.getElementById("btn-welcome-name");

// Obtener e imprimir el nombre
const getName = () => {
  welcomeSection.classList.add("hidde-section");
  homeSection.classList.remove("hidde-section");
  principalLogo.classList.add("hidde-figure");
  logoSecond.classList.remove("hidde-figure");
  btnBack.classList.remove("hidde-btn");
  nameSpace.innerHTML = inputName.value;
};

// SECCIÓN HOME
// Elegir tipo de preguntas
const btnColors = document.getElementById("btn-colors");
const btnAnimals = document.getElementById("btn-animals");
const questionColor = document.getElementById("q-color");
const imgColors = document.getElementById("colors-img");
const exitBtn = document.getElementById("exit");
const questionAnimals = document.getElementById("q-animals");

// Ir a sección de preguntas sobre colores
const goColorsSection = () => {
  homeSection.classList.add("hidde-section");
  questionColor.classList.remove("hidde-section");
  btnBack.classList.add("hidde-btn");
  exitBtn.classList.remove("hidde-btn");
  imgColors.classList.remove("hidde-figure");
};

btnColors.addEventListener("click", goColorsSection);

// Ir a sección de preguntas sobre animales

const goAnimalsSection = () => {
  homeSection.classList.add("hidde-section");
  questionAnimals.classList.remove("hidde-section");
  btnBack.classList.add("hidde-btn");
  exitBtn.classList.remove("hidde-btn");
  imgAnimals.classList.remove("hidde-figure");
};

btnAnimals.addEventListener("click", goAnimalsSection);

// Cuenta regresiva
const element = document.getElementById("countdown");
// time es igual a los milisegundos en un segundo
let time = 1000;

// countdown es la cuenta regresiva en segundos
let countdown = seconds => {
  // time es igual a los segundos
  time *= seconds;
  // updatedTime es el tiempo actualizado
  let updatedTime = time;
  let s = 0;
  // setInterval ejecuta la función cada tintervalo de tiempo en milisegundos (1000)
  let chronometer = setInterval(() => {
    updatedTime -= 1000;
    s = Math.trunc(updatedTime / 1000);
    element.textContent = `Quedan ${s} segundos.`;
    // condicional para determinar que cuando el cronometro este en 0 va a parar y va a realizar una acción
    if (updatedTime === 0) {
      clearInterval(chronometer);
      alert("¡Su tiempo ha terminado!");
      document.getElementById("countdown").innerHTML = "Buzz Buzz";
    } else {
      s--;
    }
  }, 1000);
};

// se define la catidad de segundos que va a durar nuestra cuenta regresiva
countdown(10);

// Pasar a sección HOME
btnGetName.addEventListener("click", getName);
