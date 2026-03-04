// Función principal para generar la carta
const generateCard = () => {
    const suits = ["♦", "♥", "♠", "♣"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];

    const card = document.querySelector("#card");
    
    // Inyectar valores
    document.querySelector(".top-suit").innerHTML = randomSuit;
    document.querySelector(".value").innerHTML = randomValue;
    document.querySelector(".bottom-suit").innerHTML = randomSuit;

    // Cambiar color
    card.style.color = (randomSuit === "♥" || randomSuit === "♦") ? "red" : "black";
};

window.onload = function() {
    // 1. Generar carta inicial
    generateCard();

    // 2. Botón para nueva carta
    document.querySelector("#drawBtn").addEventListener("click", generateCard);

    // 3. Temporizador cada 10 segundos (10000 ms)
    setInterval(generateCard, 10000);

    // 4. Cambiar dimensiones (Width y Height)
    const widthInput = document.querySelector("#widthInput");
    const heightInput = document.querySelector("#heightInput");
    const cardElement = document.querySelector("#card");

    widthInput.addEventListener("input", (e) => {
        if (e.target.value) cardElement.style.width = e.target.value + "px";
    });

    heightInput.addEventListener("input", (e) => {
        if (e.target.value) cardElement.style.height = e.target.value + "px";
    });
};