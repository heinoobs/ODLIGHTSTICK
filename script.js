const body = document.body;
const img = document.getElementById("lightstick");
const btn = document.getElementById("btn");

btn.onclick = () => {
  body.classList.toggle("on");

  const isOn = body.classList.contains("on");
  img.src = isOn ? "full front off.png" : "full front on.png";
};

img.onclick = btn.onclick; // klik gambar = sama
