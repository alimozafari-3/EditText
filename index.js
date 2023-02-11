let textarea = document.querySelector(".text");
let sez = 18;
function color(val) {
  textarea.style.color = `${val}`;
}

function inc() {
  sez++;
  textarea.style.fontSize = `${sez}px`;
}

function dec() {
  sez--;
  textarea.style.fontSize = `${sez}px`;
}

function italic() {
  textarea.style.fontStyle = "italic";
}

function left() {
  textarea.style.textAlign = "left";
}
function center() {
  textarea.style.textAlign = "center";
}
function right() {
  textarea.style.textAlign = "right";
}
