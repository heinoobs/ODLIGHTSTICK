const body = document.body;
const img = document.getElementById("lightstick");
const btn = document.getElementById("btn");

function toggleLightstick() {
  body.classList.toggle("on");

  const isOn = body.classList.contains("on");
  img.src = isOn ? "full front on.png" : "full front off.png";
}

btn.onclick = toggleLightstick;
img.onclick = toggleLightstick;
