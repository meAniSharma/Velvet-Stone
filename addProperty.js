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