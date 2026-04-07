const colors = {
  hitam: "#000000", coklat: "#8B4513", merah: "#FF0000", oren: "#FFA500",
  kuning: "#FFFF00", hijau: "#008000", biru: "#0000FF", ungu: "#8A2BE2",
  abu: "#808080", putih: "#FFFFFF", emas: "#FFD700", silver: "#C0C0C0"
};

const multipliers = {
  hitam: 1, coklat: 10, hitam: 100, oren: 1000, kuning: 10000,
  hijau: 100000, biru: 1000000, emas: 0.1, silver: 0.01
};

const tolerances = {
  coklat: "±1%", merah: "±2%", hijau: "±0.5%", biru: "±0.25%",
  ungu: "±0.1%", abu: "±0.05%", emas: "±5%", silver: "±10%"
};

function populateSelect(id, options) {
  const select = document.getElementById(id);
  for (let key in options) {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    select.appendChild(opt);
  }
}

populateSelect("band1", colors);
populateSelect("band2", colors);
populateSelect("multiplier", multipliers);
populateSelect("tolerance", tolerances);

function calculateResistor() {
  const band1 = Object.keys(colors).indexOf(document.getElementById("band1").value);
  const band2 = Object.keys(colors).indexOf(document.getElementById("band2").value);
  const multiplier = multipliers[document.getElementById("multiplier").value];
  const tolerance = tolerances[document.getElementById("tolerance").value];

  const value = ((band1 * 10) + band2) * multiplier;
  document.getElementById("resistorValue").textContent = `${value} Ω ${tolerance}`;
}

function updatePreview() {
  document.getElementById("band1Color").style.background = colors[document.getElementById("band1").value];
  document.getElementById("band2Color").style.background = colors[document.getElementById("band2").value];
  document.getElementById("multiplierColor").style.background = colors[document.getElementById("multiplier").value] || "#ccc";
  document.getElementById("toleranceColor").style.background = colors[document.getElementById("tolerance").value] || "#ccc";
}
