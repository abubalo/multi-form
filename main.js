// const steps = Array.from(document.querySelectorAll("form .step"));
// const  nextBtn = document.querySelectorAll('form .next_btn');
// const previousBtn = document.querySelectorAll('form .previous_btn');
// const form = document.querySelector('form')
// nextBtn.forEach(button=>{
//     button.addEventListener('click',(e) =>{
//         changeStep('next');
//     });
// });

// function changeStep(btn){
//     let index = 0;
//     const active = document.querySelector('form .step.active');
//     index = steps.indexOf(active);
//     steps[index].classList.remove('active');
//     if(btn === 'next'){
//         index ++;
//     };
//     steps[index].classList.add('active')
//     console.log(index)
// }

/* 


const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll('form .next_btn');
const previousBtn = document.querySelectorAll('form .previous_btn');
const form = document.querySelector('form');

nextBtn.forEach(button => {
  button.addEventListener('click', (e) => {
    if (validateStep()) {
      changeStep('next');
    }
  });
});

function validateStep() {
  const active = document.querySelector('form .step.active');
  const inputs = active.querySelectorAll('input');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value) {
      isValid = false;
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });

  return isValid;
}

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector('form .step.active');
  index = steps.indexOf(active);
  steps[index].classList.remove('active');
  if (btn === 'next') {
    index++;
  };
  steps[index].classList.add('active');
  console.log(index);
}


*/

/* 

const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll('form .next_btn');
const previousBtn = document.querySelectorAll('form .previous_btn');
const form = document.querySelector('form');

nextBtn.forEach(button => {
  button.addEventListener('click', (e) => {
    if (validateStep()) {
      changeStep('next');
    }
  });
});

function validateStep() {
  const active = document.querySelector('form .step.active');
  const inputs = active.querySelectorAll('input');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value) {
      isValid = false;
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });

  return isValid;
}

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector('form .step.active');
  index = steps.indexOf(active);
  steps[index].classList.remove('active');
  if (btn === 'next') {
    index++;
  };
  steps[index].classList.add('active');
  console.log(index);
}



*/

// const steps = Array.from(document.querySelectorAll("form .step"));
// const nextBtn = document.querySelectorAll("form .next_btn");
// const prevBtn = document.querySelectorAll("form .previous_btn");
// const form = document.querySelector("form");

// nextBtn.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     console.log("Next");
//     if (validateStep()) {
//         changeStep("next");
//     }
// });
// });

// prevBtn.forEach((button) => {
//     button.addEventListener("click", (e) => {
//       console.log("Prev");
//       changeStep("prev");
//   });
// });

// function changeStep(btn) {
//   let index = 0;
//   const active = document.querySelector("form .step.active");
//   index = steps.indexOf(active);
//   steps[index].classList.remove("active");
//   if (btn === "next") {
//     index++;
//   } else if (btn === "prev") {
//     index--;
//   }
//   steps[index].classList.add("active");
//   console.log(index);
// }


// function validateStep() {
//   const activeStep = document.querySelector("form .step.active");
//   const inputs = activeStep.querySelectorAll("input");
//   let isValid = true;
//   inputs.forEach((input) => {
//     if (input.value.trim() === "") {
//       input.classList.add("error");
//       input.style.border = "1px solid red";
//       isValid = false;
//     } else {
//       input.classList.remove("error");
//     }
//   });
//   return isValid;
// }

const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtns = document.querySelectorAll("form .next_btn");
const prevBtns = document.querySelectorAll("form .previous_btn");
const form = document.querySelector("form");

const StepDirection = {
  Next: "next",
  Prev: "prev"
};

nextBtns.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Next");
    handleStepChange(StepDirection.Next);
  });
});

prevBtns.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Prev");
    handleStepChange(StepDirection.Prev);
  });
});

function handleStepChange(direction) {
  const activeIndex = steps.findIndex(step => step.classList.contains("active"));
  const newIndex = direction === StepDirection.Next ? activeIndex + 1 : activeIndex - 1;

  if (validateStep(steps[activeIndex])) {
    changeStep(activeIndex, newIndex);
  }
}

function changeStep(fromIndex, toIndex) {
  steps[fromIndex].classList.remove("active");
  steps[toIndex].classList.add("active");
  console.log(toIndex);
}

function validateStep(step) {
  const inputs = step.querySelectorAll("input");
  let isValid = true;

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      input.classList.add("error");
      isValid = false;
    } else {
      input.classList.remove("error");
    }
  });

  return isValid;
}
