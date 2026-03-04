import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  const palos = ["♦", "♥", "♠", "♣"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const randomSuit = palos[Math.floor(Math.random() * palos.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  document.querySelector(".top-suit").innerHTML = randomSuit;
  document.querySelector(".value").innerHTML = randomValue;
  document.querySelector(".bottom-suit").innerHTML = randomSuit;

  if (randomSuit === "♥" || randomSuit === "♦") {
    document.querySelector("#card").style.color = "red";
  } else {
    document.querySelector("#card").style.color = "black";
  }
};
