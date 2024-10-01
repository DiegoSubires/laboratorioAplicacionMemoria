import "./style.css";

function flipFoto() {
  const div = document.getElementById("carta");
  const img = document.createElement("img");
  const imageClick = document.getElementById("imageClick");

  if (!div?.hasChildNodes() && div !== null) {
    img.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png";
    div?.appendChild(img);
    img.id = "imageClick";
    div.classList.add("flip-vertical-left");
    div.style.backgroundColor = "#b799ff";
  } else if (div?.hasChildNodes() && imageClick != null) {
    div?.removeChild(imageClick);
    div.style.backgroundColor = "#aee2ff";
    div.className = "carta";
  }
}

const cartaClick: HTMLElement | null = document.getElementById("carta");
if (cartaClick !== null) {
  cartaClick.addEventListener("click", () => flipFoto());
}
