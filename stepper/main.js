const stepperLine = document.querySelector(".stepper-line");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentStep = 1;

const steps = document.querySelectorAll(".step");

const updateStep = () => {
  // mark steps as done or active
  steps.forEach((step, idx) => {
    if (currentStep >= idx + 1) step.classList.add("active");
    else step.classList.remove("active");
  });

  // update progress
  stepperLine.style.width =
    ((currentStep - 1) / (steps.length - 1)) * 100 + "%";

  // update btn disabled property
  if (currentStep === 1) prev.disabled = true;
  else if (currentStep === 4) next.disabled = true;
  else {
    prev.disabled = false;
    next.disabled = false;
  }
};

next.addEventListener("click", (e) => {
  currentStep++;

  updateStep();
});

prev.addEventListener("click", (e) => {
  currentStep--;

  updateStep();
});
