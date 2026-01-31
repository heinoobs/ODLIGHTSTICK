const body = document.body;
const img = document.getElementById("lightstick");
const btnPower = document.getElementById("btn");
const logo = document.getElementById("logo");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");

const views = ["front", "left", "right"];
let currentView = 0;

// cek status
function isOn() {
  return body.classList.contains("on");
}

// update image
function updateImage() {
  const power = isOn() ? "on" : "off";
  const view = views[currentView];
  img.src = `${power}-${view}.png`;
}

// POWER
function togglePower() {
  body.classList.toggle("on");
  updateImage();

  // efek getar (HP)
  if (navigator.vibrate) {
    navigator.vibrate(30);
  }

  // logo ikut power
  if (isOn()) {
    logo.src = "logo-on.png";
  } else {
    logo.src = "logo-off.png";
  }
}

// NAVIGATION (PAKAI addEventListener)
btnNext.addEventListener("click", () => {
  currentView = (currentView + 1) % views.length;
  updateImage();
});

btnPrev.addEventListener("click", () => {
  currentView = (currentView - 1 + views.length) % views.length;
  updateImage();
});

// klik gambar = power
img.addEventListener("click", togglePower);
btnPower.addEventListener("click", togglePower);

// INIT
updateImage();
logo.src = "logo-off.png";
