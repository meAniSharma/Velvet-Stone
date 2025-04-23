let currentStep = 0;
const steps = document.querySelectorAll(".form-step");
const navSteps = document.querySelectorAll(".step");
const nextBtns = document.querySelectorAll(".next");
const prevBtns = document.querySelectorAll(".prev");

nextBtns.forEach(btn =>
  btn.addEventListener("click", () => changeStep(1))
);
prevBtns.forEach(btn =>
  btn.addEventListener("click", () => changeStep(-1))
);

function changeStep(direction) {
    steps[currentStep].classList.remove("active");
    navSteps[currentStep].classList.remove("active");
    currentStep += direction;
    steps[currentStep].classList.add("active");
    navSteps[currentStep].classList.add("active");
}

// Map Initialization
const map = L.map("map").setView([20, 0], 2);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let marker;

function updateMapLocation(query) {
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`)
    .then(res => res.json())
    .then(data => {
      if (data.length > 0) {
        const { lat, lon } = data[0];
        map.setView([lat, lon], 10);
        if (marker) map.removeLayer(marker);
        marker = L.marker([lat, lon]).addTo(map);
      }
    });
}

document.getElementById("country").addEventListener("blur", () => {
  const country = document.getElementById("country").value;
  updateMapLocation(country);
});

document.getElementById("city").addEventListener("blur", () => {
  const country = document.getElementById("country").value;
  const city = document.getElementById("city").value;
  if (country && city) {
    updateMapLocation(`${city}, ${country}`);
  }
});

// Image Upload Preview
const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");

dropZone.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", () => {
  preview.innerHTML = ""; // clear previous
  const file = fileInput.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});

dropZone.addEventListener("drop", e => {
  fileInput.files = e.dataTransfer.files;
  const event = new Event("change");
  fileInput.dispatchEvent(event);
});

// Submit Handler (prevent default for now)
document.getElementById("multiStepForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Form submitted!");
});