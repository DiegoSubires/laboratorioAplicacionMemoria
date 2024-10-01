import "./style.css";

function obtenerEnteroAleat(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let a = [obtenerEnteroAleat(1, 6), obtenerEnteroAleat(1, 6)];
console.log(a);

function cambiarImgCarta() {
  for (let i = 0; i < a.length; i++) {
    let img = document.getElementById("img" + (i + 1).toString());
    if (img !== null && img instanceof HTMLImageElement) {
      img.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/" +
        a[i] +
        ".png";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  cambiarImgCarta();
});

let clickCount: number = 0;
console.log(clickCount);

function flipFoto(i: number) {
  const div = document.getElementById("div" + i.toString());
  const img = document.getElementById("img" + i.toString());
  //const imageClicked = document.getElementById("imageClick" + i.toString());

  if (div !== null && img !== null && img instanceof HTMLImageElement) {
    if (img.className !== "image" + i.toString() + "Clicked") {
      clickCount++;
      console.log(clickCount);
    }
    img.hidden = false;
    img.classList.add("image" + i.toString() + "Clicked");
    div.classList.add("flip-vertical-left");
    div.style.backgroundColor = "#b799ff";
  }
  if (clickCount == 2) {
    setTimeout(() => {
      comprobarParejas();
    }, 700);
  }
}
function comprobarParejas() {
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const div1 = document.getElementById("div1");
  const div2 = document.getElementById("div2");
  if (
    img1 !== null &&
    img2 !== null &&
    div1 !== null &&
    div2 !== null &&
    img1 instanceof HTMLImageElement &&
    img2 instanceof HTMLImageElement &&
    img1.src !== img2.src
  ) {
    img1.hidden = true;
    img2.hidden = true;
    img1.classList.remove("image1Clicked");
    img2.classList.remove("image2Clicked");
    div1.style.backgroundColor = "#aee2ff";
    div2.style.backgroundColor = "#aee2ff";
    div1.classList.add("flip-vertical-left-ocultar");
    div2.classList.add("flip-vertical-left-ocultar");

    clickCount = 0;
    setTimeout(() => {
      reset();
    }, 1000);
  }
}
function reset() {
  const div1 = document.getElementById("div1");
  const div2 = document.getElementById("div2");
  if (div1 !== null && div2 !== null) {
    div1.classList.remove("flip-vertical-left");
    div2.classList.remove("flip-vertical-left");
    div1.classList.remove("flip-vertical-left-ocultar");
    div2.classList.remove("flip-vertical-left-ocultar");
  }
}

function cartaClick(i: number) {
  const cartaClick: HTMLElement | null = document.getElementById(
    "div" + i.toString()
  );
  if (cartaClick !== null) {
    cartaClick.addEventListener("click", () => flipFoto(i));
  }
}
cartaClick(1);
cartaClick(2);
