import "./style.css";

// https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/6.png

let icons = [
  "🦁",
  "🦁",
  "🦉",
  "🦉",
  "🐶",
  "🐶",
  "🐔",
  "🐔",
  "🐷",
  "🐷",
  "🐝",
  "🐝",
];

console.log(icons);

function barajar(a: string[]) {
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
console.log(barajar(icons));
