const body = document.body;
const img = document.getElementById("lightstick");
const btnPower = document.getElementById("btn");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");

// daftar sudut pandang SESUAI FILE KAMU
const views = ["front", "left", "right"];
let currentView = 0;

// ambil status ON/OFF dari body
function isOn() {
  return body.classList.contains("on");
}

// update gambar (INI PALING PENTING)
function updateImage() {
  const power = isOn() ? "on" : "off";
  const view = views[currentView];
  img.src = `${power}-${view}.png`;
}

// toggle power
function togglePower() {
  body.classList.toggle("on");
  updateImage();
}

// tombol navigasi
btnNext.onclick = () => {
  currentView = (currentView + 1) % views.length;
  updateImage();
};

btnPrev.onclick = () => {
  currentView = (currentView - 1 + views.length) % views.length;
  updateImage();
};

// klik gambar = power
img.onclick = togglePower;
btnPower.onclick = togglePower;

// STATE AWAL (WAJIB ADA)
updateImage();
