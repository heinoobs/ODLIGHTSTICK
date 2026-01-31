const body = document.body;
const img = document.getElementById("lightstick");
const btnPower = document.getElementById("btn");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");

// daftar sudut pandang
const views = ["front", "left", "right"];
let currentView = 0;

// cek status power dari body
function isOn() {
  return body.classList.contains("on");
}

// update gambar sesuai power + sudut
function updateImage() {
  const power = isOn() ? "on" : "off";
  const view = views[currentView];
  img.src = `${power}-${view}.png`;
}

// power on / off
function togglePower() {
  body.classList.toggle("on");
  updateImage();
}

// navigasi sudut
btnNext.onclick = () => {
  currentView = (currentView + 1) % views.length;
  updateImage();
};

btnPrev.onclick = () => {
  currentView = (currentView - 1 + views.length) % views.length;
  updateImage();
};

// klik gambar = power (opsional, tapi enak)
img.onclick = togglePower;
btnPower.onclick = togglePower;

// START STATE
function updateImage() {
  img.src = "off-front.png";
}
