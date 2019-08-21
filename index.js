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

btnGetName.addEventListener("click", getName);
