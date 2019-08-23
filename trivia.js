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
  chronometer = setInterval(() => {
    updatedTime -= 1000;
    s = Math.trunc(updatedTime / 1000);
    element.textContent = `${s}`;
    // condicional para determinar que cuando el cronometro este en 0 va a parar y va a realizar una acción
    if (updatedTime === 0) {
      clearInterval(chronometer);
      printModal(modalTextBtns);
      document.getElementById("countdown").innerHTML = "0";
    } else {
      s--;
    }
  }, 1000);
};

// Parar cuenta regresiva al elegir una opción
// const stopCountdown = () => {
//   clearTimeOut(countdown);
// };
// const btnRed = document.getElementById("red");
// const btnGreen = document.getElementById("green");
// const btnBlue = document.getElementById("blue");
// stopCountdown.addEventListener("click", e => {
//   if (e.target === btnRed || e.target === btnGreen || btnBlue) modalContainer();
// });

// MODAL
// Añadir un objeto de atributos a un elemento
const addAttributes = (element, attrObj) => {
  for (let attr in attrObj) {
    if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr, attrObj[attr]);
  }
};
// Crear elementos con atributos e hijo
const createCustomElement = (element, attributes, children) => {
  let customElement = document.createElement(element);
  if (children !== undefined)
    children.forEach(el => {
      if (el.nodeType) {
        if (el.nodeType === 1 || el.nodeType === 11)
          customElement.appendChild(el);
      } else {
        customElement.innerHTML += el;
      }
    });
  addAttributes(customElement, attributes);
  return customElement;
};

// Imprimir modal eliminar publicación
const printModal = content => {
  // Crear contenedor interno
  const modalContent = createCustomElement(
      "div",
      {
        id: "modal-content",
        class: "modal-content"
      },
      [content]
    ),
    // Crear contenedor principal
    modalContainer = createCustomElement(
      "div",
      {
        id: "modal-container",
        class: "modal-container"
      },
      [modalContent]
    );

  document.body.appendChild(modalContainer);

  const removeModal = () => document.body.removeChild(modalContainer);

  modalContainer.addEventListener("click", e => {
    const btnAgain = document.getElementById("try-again");
    const btnExit = document.getElementById("btn-exit");
    if (e.target === btnAgain || e.target === btnExit) removeModal();
  });
};

const btnRed = document.getElementById("red");
const btnGreen = document.getElementById("green");
const btnBlue = document.getElementById("blue");

const modalTextBtns = ` <article class="modalTextBtns" id="modalTextTime">
<h3>Se acabo el tiempo</h3>
<figure>
  <img src="./img/time-09.png" alt="sorprendido" class="img-feel"/>
</figure>
<button type="button" class="btn-white" >
  <img src="./img/again-10.png" alt="otra vez" id="try-again"/>
</button>
<button type="button" class="btn-white"><img src="./img/exit-02.png"/></button>
</article>`;

const modalTextYes = ` <article class="modalTextBtns" id="modalTextYes">
<h3>¡SÍ!</h3>
<figure style="
margin-bottom: 65px;">
  <img src="./img/co-inc-07.png" alt="feliz" class="img-feel" />
</figure>
<button type="button" class="btn-white">
  <img src="./img/next-11.png" alt="siguiente" />
</button>
</article>`;

const modalTextNo = `<article class="modalTextBtns" id="modalTextNo">
<h3>NO</h3>
<figure>
  <img src="./img/co-inc-08.png" alt="triste" class="img-feel" />
</figure>
<button type="button" class="btn-white">
  <img src="./img/again-10.png" alt="otra vez" />
</button>
<button type="button" class="btn-white">
<img src="./img/exit-02.png"/>
</button>
</article>`;

// if (
//   document
//     .getElementById("blue")
//     .addEventListener("click", printModal(modalTextYes))
// ) {
//   clearInterval(chronometer);
// } else {
//   document.addEventListener("click", e => {
//     if (e.target === btnRed || e.target === btnGreen) printModal(modalTextNo);
//     clearInterval(chronometer);
//   });
// }

const goHomeSection = () => {
  questionColor.classList.add("hidde-section");
  homeSection.classList.remove("hidde-section");
  // principalLogo.classList.add("hidde-figure");
  // logoSecond.classList.remove("hidde-figure");
  btnBack.classList.remove("hidde-btn");
  nameSpace.innerHTML = inputName.value;
  exitBtn.classList.add("hidde-btn");
  imgColors.classList.add("hidde-figure");
};
