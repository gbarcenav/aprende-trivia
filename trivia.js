// Obtener e imprimir el nombre
const getName = () => {
  welcomeSection.classList.add("hidde-section");
  homeSection.classList.remove("hidde-section");
  principalLogo.classList.add("hidde-figure");
  logoSecond.classList.remove("hidde-figure");
  btnBack.classList.remove("hidde-btn");
  nameSpace.innerHTML = inputName.value;
};

// Ir a sección de preguntas sobre colores
const goColorsSection = () => {
  homeSection.classList.add("hidde-section");
  questionColor.classList.remove("hidde-section");
  btnBack.classList.add("hidde-btn");
  exitBtn.classList.remove("hidde-btn");
  imgColors.classList.remove("hidde-figure");
};

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
    element.textContent = `${s}`;
    // condicional para determinar que cuando el cronometro este en 0 va a parar y va a realizar una acción
    if (updatedTime === 0) {
      clearInterval(chronometer);
      alert("¡Su tiempo ha terminado!");
      document.getElementById("countdown").innerHTML = "0";
    } else {
      s--;
    }
  }, 1000);
};
