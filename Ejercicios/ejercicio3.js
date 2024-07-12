console.log("Hola");
const PIEDRA_BTN = document.getElementById("piedra");
const PAPEL_BTN = document.getElementById("papel");
const TIJERA_BTN = document.getElementById("tijera");

const PIEDRA = 0;
const PAPEL = 1;
const TIJERA = 2;

const WIN = 0;
const LOST = 1;
const TIED = 2;

var machineOption = Math.floor(Math.random() * 3);
console.log(machineOption);

function play(_optionUser) {
  console.log("funcion play");
  if (_optionUser == machineOption) {
    console.log("Empate");
    return TIED;
  } else if (_optionUser == PIEDRA) {
    if (machineOption == PAPEL) {
      return LOST;
    } else if (machineOption == TIJERA) {
      return WIN;
    }
  } else if (_optionUser == PAPEL) {
    if (machineOption == PIEDRA) {
      return WIN;
    } else if (machineOption == TIJERA) {
      return LOST;
    }
  } else if (_optionUser == TIJERA) {
    if (machineOption == PIEDRA) {
      return LOST;
    } else if (machineOption == PAPEL) {
      return WIN;
    }
  } else {
    console.warn("Error");
  }
}

PIEDRA_BTN.addEventListener("click", function () {
  console.log("Evento de piedra");
  play(PIEDRA);
});

PAPEL_BTN.addEventListener("click", function () {
  console.log("Evento de papel");
  play(PAPEL);
});

TIJERA_BTN.addEventListener("click", function () {
  console.log("Evento de tijera");
  play(TIJERA);
});

// switch(_variable){
//     case WIN:
//         console.log("win");
//         break;
//     case LOST:
//         console.log("Lost");
//         break;
//     case TIED:
//         console.log("tied");
//         break;
//   }
