// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const palette = document.querySelector(`#palette`);

const currentColor = document.querySelector("#current-color");

palette.addEventListener(`click`, (el) => {
  if (el.target.className === `color`) {
    currentColor.style.backgroundColor = el.target.style.backgroundColor;
  }
});
const canvas = document.querySelector("#canvas");
console.log(canvas);
canvas.addEventListener("click", (event) => {
  if (
    event.target.style.backgroundColor === currentColor.style.backgroundColor
  ) {
    event.target.style.backgroundColor = "white";
  } else {
    event.target.style.backgroundColor = currentColor.style.backgroundColor;
  }
});
