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
      printModal(modalTextBtns);
      document.getElementById("countdown").innerHTML = "0";
    } else {
      s--;
    }
  }, 1000);
};

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

const modalTextBtns = ` <article class="modalTextBtns" id="modalTextTime">
<h3>Se acabo el tiempo</h3>
<figure>
  <img src="./img/time-09.png" alt="sorprendido" class="img-feel"/>
</figure>
<button type="button" class="btn-white" >
  <img src="./img/again-10.png" alt="otra vez" id="try-again"/>
</button>
<button type="button" class="btn-white"><img src="./img/exit-02.png" id="btn-exit"/></button>
</article>`;
// document.getElementById("").addEventListener("click", () => {
//   printModal(modalTextBtns);
// });
