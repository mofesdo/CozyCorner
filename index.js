console.log("linked");

const openModalImg = document.querySelector(".page__window");
const closeModalBtn = document.getElementById("closeModal");
const modal = document.getElementById("windowModal");
const relaxCircle = document.getElementById("relaxCircle");
const circleText = document.getElementById("circleText");

const lamp = document.querySelector(".page__lamp");
const lampOverlay = document.querySelector(".page__overlay");

let inhaleDuration = 3000; 
let holdDuration = 4000; 
let exhaleDuration = 3000; 
let repeatCount = 5;

// Opening the window
openModalImg.addEventListener("click", () => {
  modal.style.display = "block";
});

// Start modal when pressed the button 
relaxCircle.addEventListener("click", () =>{
    breatheCycle();
})

lamp.addEventListener("click", () => {
  lampOverlay.hidden = !lampOverlay.hidden;
});

// Window close button
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


//Breathing function
function breatheCycle() {
    let count = 0;
  
    function animateBreathing() {
      if (count < repeatCount) {
        setTimeout(() => {
            // inhale moment
          circleText.textContent = "INHALE";
          // used help from ai and (https://codepen.io/aliemir/pen/oPvwPw) to figure this part out
          relaxCircle.style.width = "200px";
          relaxCircle.style.height = "200px";
          relaxCircle.style.transition = `width ${inhaleDuration}ms ease-in-out, height ${inhaleDuration}ms ease-in-out, background-size ${inhaleDuration}ms ease-in-out`;
          relaxCircle.style.backgroundSize = "120% 120%";
  
          setTimeout(() => {
            // hold moment
            circleText.textContent = "HOLD";
            relaxCircle.style.transition = `background-size ${holdDuration}ms ease-in-out`;
            relaxCircle.style.backgroundSize = "130% 130%";
  
            setTimeout(() => {
              // exhale moment
              circleText.textContent = "EXHALE";
              relaxCircle.style.width = "150px";
              relaxCircle.style.height = "150px";
              relaxCircle.style.transition = `width ${exhaleDuration}ms ease-in-out, height ${exhaleDuration}ms ease-in-out, background-size ${exhaleDuration}ms ease-in-out`;
              relaxCircle.style.backgroundSize = "100% 100%";
  
              setTimeout(() => {
                count++;
                animateBreathing();
              }, exhaleDuration);
            }, holdDuration);
          }, inhaleDuration);
        }, 1000);
      } else {
        // reset everything once complete
        circleText.textContent = "LET'S RELAX";
        relaxCircle.style.width = "150px";
        relaxCircle.style.height = "150px";
        relaxCircle.style.backgroundSize = "100% 100%";
        relaxCircle.style.transition = "none";
      }
    }
    animateBreathing();
  }
  