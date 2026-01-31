const body = document.body;
const img = document.getElementById("lightstick");
const btn = document.getElementById("btn");

let isOn = false; // START OFF

btn.onclick = () => {
  isOn = !isOn;
  
  body.classList.toggle("on", isOn);
  img.src = isOn ? "full front on.png" : "full front off.png";
};

img.onclick = btn.onclick; // klik gambar = sama
