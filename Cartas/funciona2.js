import "bootstrap";
import "./style.css";

const cardElement = document.querySelector("#card");
const topSuit = document.querySelector(".top-suit");
const cardValue = document.querySelector(".value");
const bottomSuit = document.querySelector(".bottom-suit");

const PALOS = ["♦", "♥", "♠", "♣"];
const VALORES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const generarCarta = () => {
    // Verificación de seguridad: si los elementos no existen, no ejecutamos nada.
    if (!cardElement || !topSuit || !cardValue || !bottomSuit) return;

    const randomSuit = PALOS[Math.floor(Math.random() * PALOS.length)];
    const randomValue = VALORES[Math.floor(Math.random() * VALORES.length)];

    // Inyectamos los valores
    topSuit.textContent = randomSuit;
    cardValue.textContent = randomValue;
    bottomSuit.textContent = randomSuit;

  
    const isRed = randomSuit === "♥" || randomSuit === "♦";
    cardElement.style.color = isRed ? "var(--bs-danger)" : "var(--bs-dark)";
};


window.onload = function () {
  //write your code here
   console.log("Hello Rigo from the console!");
    generarCarta();

    // Configuración del botón
    const boton = document.querySelector("#drawBtn");
    boton?.addEventListener("click", generarCarta);

    // Temporizador
    setInterval(generarCarta, 10000);

    // Manejo de dimensiones con desestructuración
    const inputAncho = document.querySelector("#widthInput");
    const inputAlto = document.querySelector("#heightInput");

    const updateSize = (e, property) => {
        const val = e.target.value;
        if (val > 0) cardElement.style[property] = `${val}px`;
    };

    inputAncho?.addEventListener("input", (e) => updateSize(e, "width"));
    inputAlto?.addEventListener("input", (e) => updateSize(e, "height"));
};