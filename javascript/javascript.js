const Mapa = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1,
  0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0,
  0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
  2, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 2, 2, 0, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2,
  2, 0, 1, 0, 2, 2, 2, 0, 0, 0, 0, 1, 0, 2, 0, 0, 3, 3, 3, 0, 0, 2, 0, 1, 0, 0,
  0, 0, 2, 2, 2, 2, 1, 2, 2, 0, 3, 3, 3, 3, 3, 0, 2, 2, 1, 2, 2, 2, 2, 0, 0, 0,
  0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 2, 2, 2, 0, 1, 0, 2, 2,
  2, 2, 2, 2, 2, 2, 2, 0, 1, 0, 2, 2, 2, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0,
  0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1,
  0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0,
  0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

//Variables / Constantes
const COLUMNAS = 21;
const FILAS = 22;
var Tablero = document.getElementById("tablero");
var Bloques = "";
var Bloque = "";
var MapaVirtual = [];
const POCICION_INICIAL = 346;
var POCICION_ACTUAL_PACMAN = 346;
const POCICION_FRUTILLA = 262;
var TOTAL_MONEDAS = 172;
var score = 0;

//Definir el Mapa
function CrearMapa() {
  // 0 =  Muro
  // 1 =  Camino
  // 2 =  Nada
  // 3 =  Guarida

  for (var x = 0; x < Mapa.length; x++) {
    Bloque = document.createElement("div");
    
    Tablero.appendChild(Bloque);

    //Asignar la clase en Mapa
    switch (Mapa[x]) {
      case 0:
        Bloque.classList.add("bloque");        
        break;
      case 1:
        Bloque.classList.add("camino");
        
        break;
      case 2:
        Bloque.classList.add("vacio");
        break;
      case 3:
        Bloque.classList.add("guarida");
      default:
        break;
    }

    MapaVirtual.push(Bloque);
  }
}

//Renderizar el Mapa
CrearMapa();

//Inicializar Pacman
MapaVirtual[POCICION_INICIAL].classList.add("pacman");

//Definir los fantasmas
const Fanstasmas = [
  {
    nombre: "fantasma1",
    pocicionInicial: 218,
    pocicionActual: 218,
    velocidad: 100,
  },
  {
    nombre: "fantasma2",
    pocicionInicial: 219,
    pocicionActual: 219,
    velocidad: 300,
  },
  {
    nombre: "fantasma3",
    pocicionInicial: 220,
    pocicionActual: 220,
    velocidad: 200,
  },
  {
    nombre: "fantasma4",
    pocicionInicial: 221,
    pocicionActual: 221,
    velocidad: 100,
  },
  {
    nombre: "fantasma5",
    pocicionInicial: 222,
    pocicionActual: 222,
    velocidad: 200,
  },
];

//Posicionar los fantasmas
Fanstasmas.forEach((fant) => {
  MapaVirtual[fant.pocicionInicial].classList.add(fant.nombre);
});

//Que aparesca una frutilla cada 10 segundos por 5 segundos
// se vuelve a ejecutar cada 15 segundos
function FrutillaMagica() {
  setTimeout(() => {
    MapaVirtual[POCICION_FRUTILLA].classList.add("frutilla");

    setTimeout(() => {
      MapaVirtual[POCICION_FRUTILLA].classList.remove("frutilla");
    }, 5000);
  }, 10000);

  setTimeout(FrutillaMagica, 15000);
}

//Mover Fantasmas
function MoverFantasmas(Fantas) {
  let arrayDirecciones = [+1, -1, -COLUMNAS, +COLUMNAS];
  let DirecccionFantasma =
    arrayDirecciones[Math.floor(Math.random() * arrayDirecciones.length)];

  Fantas.TimerId = setInterval(function () {
    if (!MapaVirtual[Fantas.pocicionActual + DirecccionFantasma].classList.contains("bloque") &&
        !MapaVirtual[Fantas.pocicionActual + DirecccionFantasma].classList.contains("fantasma")){

        MapaVirtual[Fantas.pocicionActual].classList.remove(Fantas.nombre);
        MapaVirtual[Fantas.pocicionActual].classList.remove("fantasma");

        Fantas.pocicionActual += DirecccionFantasma;

        MapaVirtual[Fantas.pocicionActual].classList.add(Fantas.nombre);
        MapaVirtual[Fantas.pocicionActual].classList.add("fantasma");

      if (MapaVirtual[Fantas.pocicionActual].classList.contains("pacman")) {
          alert("GAME OVER!");
          Fanstasmas.forEach((err) => clearInterval(err.TimerId));
          location.reload();         
      }
    } else {
      DirecccionFantasma = arrayDirecciones[Math.floor(Math.random() * arrayDirecciones.length)];
    }
  }, Fantas.velocidad);
}

//Mover a Pacman
function MoverPacman(key) {
  MapaVirtual[POCICION_ACTUAL_PACMAN].classList.remove("pacman");
  MapaVirtual[POCICION_ACTUAL_PACMAN].classList.remove("arriba");
  MapaVirtual[POCICION_ACTUAL_PACMAN].classList.remove("abajo");
  MapaVirtual[POCICION_ACTUAL_PACMAN].classList.remove("izquierda");

  switch (key.code) {
    case "ArrowLeft":
      if (!MapaVirtual[POCICION_ACTUAL_PACMAN - 1].classList.contains("bloque")) {
        POCICION_ACTUAL_PACMAN--;
      }

      if (POCICION_ACTUAL_PACMAN === 210) {
        POCICION_ACTUAL_PACMAN = 230;
      }

      MapaVirtual[POCICION_ACTUAL_PACMAN].classList.add("izquierda");
      break;

    case "ArrowRight":
      if (!MapaVirtual[POCICION_ACTUAL_PACMAN + 1].classList.contains("bloque")) {
          POCICION_ACTUAL_PACMAN++;
      }

      if (POCICION_ACTUAL_PACMAN === 230) {
          POCICION_ACTUAL_PACMAN = 210;
      }

      MapaVirtual[POCICION_ACTUAL_PACMAN].classList.add("derecha");
      break;

    case "ArrowUp":
      if (!MapaVirtual[POCICION_ACTUAL_PACMAN - COLUMNAS].classList.contains("bloque")) {
          POCICION_ACTUAL_PACMAN = POCICION_ACTUAL_PACMAN - COLUMNAS;
      }

      MapaVirtual[POCICION_ACTUAL_PACMAN].classList.add("arriba");
      break;

    case "ArrowDown":
      if (!MapaVirtual[POCICION_ACTUAL_PACMAN + COLUMNAS].classList.contains("bloque")) {
          POCICION_ACTUAL_PACMAN = POCICION_ACTUAL_PACMAN + COLUMNAS;
      }

      MapaVirtual[POCICION_ACTUAL_PACMAN].classList.add("abajo");
      break;

    default:
      break;
  }

  if (MapaVirtual[POCICION_ACTUAL_PACMAN].classList.contains("camino")) {
    score = score + 10;
    TOTAL_MONEDAS--;

    MapaVirtual[POCICION_ACTUAL_PACMAN].classList.remove("camino");
    MapaVirtual[POCICION_ACTUAL_PACMAN].classList.add("vacio");
  } else if (MapaVirtual[POCICION_ACTUAL_PACMAN].classList.contains("frutilla")) {
    score = score + 50;
    
    Sonidos('fruta')
    
    MapaVirtual[POCICION_ACTUAL_PACMAN].classList.remove("frutilla");
  }

  MapaVirtual[POCICION_ACTUAL_PACMAN].classList.add("pacman");
  
   Sonidos('avanzar')
  
  // console.log(POCICION_ACTUAL_PACMAN);

  QuedanMonedas();

  if (MapaVirtual[POCICION_ACTUAL_PACMAN].classList.contains("fantasma")) {
    alert("GAME OVER!");
    Fanstasmas.forEach((err) => clearInterval(err.TimerId));
    location.reload();
  }

  ModificarPuntaje();
}

//Actualizar Puntaje
function ModificarPuntaje() {
  document.getElementById("spanPuntaje").innerText = score;
}


//Sonidos
function Sonidos (sonido){
const audioElement = new Audio();

  // audioElement.pause()
  var Sonido =''; 

  switch (sonido) {    
    case 'avanzar':  
          Sonido = './assets/sonidos/munch_1.wav'
      break;
    case 'fruta':
         Sonido = './assets/sonidos/eat_fruit.wav'
      break;
  }

  
  audioElement.src = Sonido;  
  audioElement.play();
  
}

var quedan = true;

function QuedanMonedas() {
  if (TOTAL_MONEDAS <= 0) {
    alert("GANASTE !!!!");   
    location.reload();
  }
}

document.addEventListener("keyup", MoverPacman);
FrutillaMagica();
Fanstasmas.forEach((fantas) => MoverFantasmas(fantas));
