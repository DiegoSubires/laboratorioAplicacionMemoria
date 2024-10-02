import "./style.css";
import { iniciarPartida, voltearLaCarta } from "./motor";
import { tablero } from "./modelo";
import { botonInicio, botonFin } from "./ui";

if (botonInicio !== null && botonInicio instanceof HTMLButtonElement) {
  botonInicio.addEventListener("click", iniciarPartida);
}
if (botonFin !== null && botonFin instanceof HTMLButtonElement) {
  botonFin.addEventListener("click", () => {
    if (
      botonInicio !== null &&
      botonInicio instanceof HTMLButtonElement &&
      botonFin !== null &&
      botonFin instanceof HTMLButtonElement
    ) {
      botonInicio.disabled = false;
      botonFin.disabled = true;
    }
  });
}

export function cartaClick(i: number) {
  const cartaClick: HTMLElement | null = document.getElementById(
    "div" + i.toString()
  );
  if (cartaClick !== null) {
    cartaClick.addEventListener("click", () => voltearLaCarta(tablero, i));
  }
}
export function activarClicks() {
  for (let i = 0; i < 12; i++) {
    cartaClick(i);
  }
}
if (
  botonInicio !== null &&
  botonInicio instanceof HTMLButtonElement &&
  botonInicio.disabled === false
) {
  activarClicks();
}
