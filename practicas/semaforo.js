// Definición de constantes (valores que no cambian durante la ejecución)
const RED_LIGHT = "rojo";
const YELLOW_LIGHT = "amarillo";
const GREEN_LIGHT = "verde";

// Variable que podría cambiar según un sensor
let currentTrafficLight = "rojo";

if (currentTrafficLight === RED_LIGHT) {
    console.log("¡Para! 🛑");
} else if (currentTrafficLight === YELLOW_LIGHT) {
    console.log("¡Precaución! ⚠️");
} else if (currentTrafficLight === GREEN_LIGHT) {
    console.log("¡Pasa! 🟢");
} else {
    console.log("¡Error! Color de semáforo no reconocido 🚫");
}