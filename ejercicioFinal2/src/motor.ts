import { cartas, Carta, tablero, Tablero } from "./modelo";
import { botonInicio, botonFin, botonResultado } from "./ui";

export let clickCount: number = 0;
export let parejasEncontradas: number = 0;
export let intentos: number = 0;

export function barajar(a: Carta[]) {
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function asignarImgCarta() {
  for (let i = 0; i < cartas.length; i++) {
    let img = document.getElementById("img" + i.toString());
    if (img !== null && img instanceof HTMLImageElement) {
      img.src = cartas[i].imagen;
    }
  }
}

export const sePuedeVoltearLaCarta = (
  tablero: Tablero,
  indice: number
): boolean | undefined => {
  if (
    tablero.cartas[indice].encontrada == false &&
    tablero.cartas[indice].encontrada == false
  ) {
    return true;
  } else {
    return false;
  }
};

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  if (sePuedeVoltearLaCarta(tablero, indice) == true) {
    const div = document.getElementById("div" + indice.toString());
    const img = document.getElementById("img" + indice.toString());
    if (div !== null && img !== null && img instanceof HTMLImageElement) {
      if (img.className !== "image" + indice.toString() + "Clicked") {
        clickCount++;
        console.log(clickCount);
      }
      img.hidden = false;
      img.classList.add("image" + indice.toString() + "Clicked");
      div.classList.add("flip-vertical-left");
      div.style.backgroundColor = "#b799ff";
      tablero.cartas[indice].estaVuelta = true;
    }
    if (clickCount == 2) {
      setTimeout(() => {
        volverCartas();
      }, 700);
    }
  }
};

export const volverCartas = (): void => {
  const indiceA: number = tablero.cartas.indexOf(
    tablero.cartas.filter((cartas) => cartas.estaVuelta)[0]
  );
  const indiceB: number = tablero.cartas.indexOf(
    tablero.cartas.filter((cartas) => cartas.estaVuelta)[1]
  );
  if (sonPareja(tablero, indiceA, indiceB) === false) {
    const img1 = document.getElementById("img" + indiceA.toString());
    const img2 = document.getElementById("img" + indiceB.toString());
    const div1 = document.getElementById("div" + indiceA.toString());
    const div2 = document.getElementById("div" + indiceB.toString());
    if (
      img1 !== null &&
      img2 !== null &&
      div1 !== null &&
      div2 !== null &&
      img1 instanceof HTMLImageElement &&
      img2 instanceof HTMLImageElement
    ) {
      img1.hidden = true;
      img2.hidden = true;
      div1.style.backgroundColor = "#aee2ff";
      div2.style.backgroundColor = "#aee2ff";
      img1.classList.remove("image" + indiceA.toString() + "Clicked");
      img2.classList.remove("image" + indiceB.toString() + "Clicked");
      div1.classList.add("flip-vertical-left-ocultar");
      div2.classList.add("flip-vertical-left-ocultar");

      clickCount = 0;
      intentos++;
      setTimeout(() => {
        resetClass(indiceA, indiceB);
      }, 500);
    }
    tablero.cartas[indiceA].estaVuelta = false;
    tablero.cartas[indiceB].estaVuelta = false;
  }
  if (sonPareja(tablero, indiceA, indiceB) === true) {
    tablero.cartas[indiceA].estaVuelta = false;
    tablero.cartas[indiceA].encontrada = true;
    tablero.cartas[indiceB].estaVuelta = false;
    tablero.cartas[indiceB].encontrada = true;
    clickCount = 0;
    intentos++;
    parejasEncontradas++;
    parejaEncontrada(tablero, indiceA, indiceB);
    cambiarEstadoPartida(parejasEncontradas);
  }
  if (botonResultado !== null && botonResultado instanceof HTMLButtonElement) {
    botonResultado.innerHTML = intentos.toString().padStart(2, "0");
  }
};

export const sonPareja = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): boolean => {
  const cartas: Carta[] = tablero.cartas;
  if (cartas[indiceA].idFoto === cartas[indiceB].idFoto) {
    return true;
  } else {
    return false;
  }
};

export const parejaEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  if (sonPareja(tablero, indiceA, indiceB) === true) {
    tablero.cartas[indiceA].encontrada = true;
    tablero.cartas[indiceB].encontrada = true;
  }
};

export function iniciarPartida() {
  resetDOM();
  barajar(cartas);
  resetTablero(tablero);
  asignarImgCarta();
  resetContadores();

  if (
    botonInicio !== null &&
    botonInicio instanceof HTMLButtonElement &&
    botonFin !== null &&
    botonFin instanceof HTMLButtonElement
  ) {
    botonInicio.disabled = true;
    botonFin.disabled = false;
  }
  if (botonResultado !== null && botonResultado instanceof HTMLButtonElement) {
    botonResultado.innerHTML = intentos.toString().padStart(2, "0");
  }
}

export const cambiarEstadoPartida = (a: number): void => {
  switch (a) {
    case 1:
      tablero.estadoPartida = "UnaCartaLevantada";
      break;
    case 2:
      tablero.estadoPartida = "DosCartasLevantadas";
      break;
    case 3:
      tablero.estadoPartida = "TresCartasLevantadas";
      break;
    case 4:
      tablero.estadoPartida = "CuatroCartasLevantadas";
      break;
    case 2:
      tablero.estadoPartida = "CincoCartasLevantadas";
      break;
    case 3:
      tablero.estadoPartida = "PartidaCompleta";
      break;
    default:
      null;
  }
};
export function resetClass(indiceA: number, indiceB: number) {
  const div1 = document.getElementById("div" + indiceA.toString());
  const div2 = document.getElementById("div" + indiceB.toString());
  if (div1 !== null && div2 !== null) {
    div1.classList.remove("flip-vertical-left");
    div2.classList.remove("flip-vertical-left");
    div1.classList.remove("flip-vertical-left-ocultar");
    div2.classList.remove("flip-vertical-left-ocultar");
  }
}
export function resetDOM() {
  for (let i = 0; i < 12; i++) {
    const div = document.getElementById("div" + i.toString());
    const img = document.getElementById("img" + i.toString());
    if (div !== null && div instanceof HTMLElement) {
      div.classList.remove("flip-vertical-left");
      div.classList.remove("flip-vertical-left-ocultar");
      div.style.backgroundColor = "";
    }
    if (img !== null && img instanceof HTMLImageElement) {
      img.src = "";
      img.hidden = true;
      img.classList.remove("image" + i.toString() + "Clicked");
    }
  }
}
export function resetTablero(tablero: Tablero) {
  for (let i = 0; i < 12; i++) {
    tablero.cartas[i].encontrada = false;
    tablero.cartas[i].estaVuelta = false;
    tablero.estadoPartida = "CeroCartasLevantadas";
    // tablero.estadoPartida = "PartidaNoIniciada";
  }
}
export function resetContadores() {
  clickCount = 0;
  parejasEncontradas = 0;
  intentos = 0;
}
