import "./style.css";

function flipFoto(a: number) {
  const clss = "carta0" + a;
  const div = document.getElementById(clss);
  const img = document.createElement("img");
  const imageClick = document.getElementById("imageClick" + clss);

  if (!div?.hasChildNodes() && div !== null) {
    img.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/" +
      a +
      ".png";
    div?.appendChild(img);
    img.id = "imageClick" + clss;
    div.classList.add("flip-vertical-left");
    div.style.backgroundColor = "#b799ff";
  } else if (div?.hasChildNodes() && imageClick != null) {
    div?.removeChild(imageClick);
    div.style.backgroundColor = "#aee2ff";
    div.className = "carta";
  }
}

function cartaClick(a: number) {
  const clss = "carta0" + a;
  const cartaClick: HTMLElement | null = document.getElementById(clss);
  if (cartaClick !== null) {
    cartaClick.addEventListener("click", () => flipFoto(a));
  }
}
cartaClick(1);
cartaClick(2);
