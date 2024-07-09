console.log("Hola");
var colorsArray = ["#f15025", "rgba(133,122,200)", "pink", "yellow"];

const btn = document.getElementById("btn");
//var color = document.getElementByClassName("color");

btn.addEventListener("click", function () {
  console.log("Click detectado");
  const getRandomNumberDos = getRandomNumber();
  console.log("calculo ", getRandomNumberDos);
  document.body.style.backgroundColor = colorsArray[getRandomNumberDos];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colorsArray.length);
}

/*const COLORS = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = COLORS[randomNumber];
  color.textContent = COLORS[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * COLORS.length);
}
*/
