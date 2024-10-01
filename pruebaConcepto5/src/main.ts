import "./style.css";

interface InfoCarta {
  idFoto: number;
  imagenSrc: string;
}

let cartas: InfoCarta[] = [
  {
    idFoto: 0,
    imagenSrc:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png",
  },
  {
    idFoto: 1,
    imagenSrc:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png",
  },
  {
    idFoto: 2,
    imagenSrc:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
  },
  {
    idFoto: 3,
    imagenSrc:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
  },
  {
    idFoto: 4,
    imagenSrc:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png",
  },
  {
    idFoto: 5,
    imagenSrc:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png",
  },
  {
    idFoto: 6,
    imagenSrc:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png",
  },
  {
    idFoto: 7,
    imagenSrc:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png",
  },
  {
    idFoto: 8,
    imagenSrc:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png",
  },
  {
    idFoto: 9,
    imagenSrc:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png",
  },
  {
    idFoto: 10,
    imagenSrc:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png",
  },
  {
    idFoto: 11,
    imagenSrc:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png",
  },
];

function barajar(a: InfoCarta[]) {
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
console.log(barajar(cartas));

function asignarImgCarta() {
  for (let i = 0; i < cartas.length; i++) {
    let img = document.getElementById("img" + i.toString());
    if (img !== null && img instanceof HTMLImageElement) {
      img.src = cartas[i].imagenSrc;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  asignarImgCarta();
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
