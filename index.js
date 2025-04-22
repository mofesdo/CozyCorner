import { WaterfallSound } from "./components/waterfall.js";

//Window const
const openModalImg = document.querySelector(".page__window");
const closeModalBtn = document.getElementById("closeModal");
const modalDefault = document.getElementById("windowModalDefault");

//Plant const
const closeModalCustom = document.getElementById("closeModalCustom");
const modalCustom = document.getElementById("windowModalCustom");

//Breathing const
const relaxCircle = document.getElementById("relaxCircle");
const circleText = document.getElementById("circleText");
//Breathing duration let
let inhaleDuration = 3000;
let holdDuration = 4000;
let exhaleDuration = 3000;
let repeatCount = 5;

//Lamp Const
const lamp = document.querySelector(".page__lamp");
const lampOverlay = document.querySelector(".page__overlay");

//Radio Const
const radio = document.querySelector(".page__radio");
const music = document.querySelector("#bgMusic");
//Music Volume
music.volume = 0.75;

//TV const
const tvToggle = document.querySelector(".page__tv");
const tvOn = document.querySelector(".page__tv-on");

//Flower const
const flowerThumbs = document.querySelectorAll(".flower-thumb");

// Couch tv chanalls
const theater = document.querySelector(".page__seating");
const theaterWindow = document.getElementById("theaterWindow");
const theaterClose = document.querySelector(".closeTheater");
const thumbnails = document.querySelectorAll(".video-thumb");
const player = document.getElementById("youtubePlayer");
const videoOverlay = document.querySelector(".video-overlay");
let lastPlaybackTime = 0;
let currentVideoId = "";
let lastTime = 0;

// TV turning on function
tvToggle.addEventListener("click", () => {
  if (tvOn.style.display === "none" || tvOn.style.display === "") {
    tvOn.style.display = "block";
  } else {
    tvOn.style.display = "none";
  }
});
console.log("linked");

// Plant Module Open
document.querySelector(".page__plant").addEventListener("click", function () {
  modalCustom.style.display = "flex";
  modalCustom.classList.add("page__module--pop");
});
// Plant Module Closing
closeModalCustom.addEventListener("click", () => {
  modalCustom.style.display = "none";
  modalCustom.classList.remove("page__module--pop");
});

// Window Module Opening
openModalImg.addEventListener("click", () => {
  modalDefault.style.display = "flex";
  modalDefault.classList.add("page__module--pop-default");
});
// Window Module Closing
closeModalBtn.addEventListener("click", () => {
  modalDefault.style.display = "none";
});
// Start window relax when pressed the button
relaxCircle.addEventListener("click", () => {
  breatheCycle();
});

//Lamp Turning on-off
lamp.addEventListener("click", () => {
  lampOverlay.hidden = !lampOverlay.hidden;
});

//Music starting-stopping
radio.addEventListener("click", () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});

// Plant Module Randomizer
flowerThumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const newFlower = document.createElement("img");
    newFlower.src = thumb.src;
    newFlower.style.position = "absolute";
    newFlower.style.width = "60px";
    newFlower.style.height = "60px";
    newFlower.style.pointerEvents = "none";
    newFlower.classList.add("flower--pop");

    // Randomizer of positions and below 250px - Internet help and AI help because I didn't have the scope of knowledge yet but I fairly understand the use it
    const modalRect = modalCustom.getBoundingClientRect(); // method for DOM elem. Returns objects size and relative positions on the viewport
    const maxX = modalRect.width - 60; //x axis width so flower doesnt go outside the right edge so we subtract 60px to be sure it doesnt go out
    const minY = 120; // this is y axis maximum reach, meaning do not go over 250px from bottom up
    const maxY = modalRect.height - 60; // same thing as the x axis

    const randomX = Math.floor(Math.random() * maxX); // random left position between 0 and maxX
    const randomY = Math.floor(Math.random() * (maxY - minY) + minY); // random top position but always 250px more so it doesnt show up too high

    newFlower.style.left = `${randomX}px`; //place the flower x/y cordinates
    newFlower.style.top = `${randomY}px`; //place the flower x/y cordinates

    modalCustom.appendChild(newFlower); // this actually adds the flower to the modal
  });
});

// Window Module - Breathing
function breatheCycle() {
  let count = 0;

  function animateBreathing() {
    if (count < repeatCount) {
      setTimeout(() => {
        // inhale moment
        circleText.textContent = "INHALE";
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

//Theater Open Model
theater.addEventListener("click", () => {
  theaterWindow.style.display = "";
  theaterWindow.classList.add("page__module--videos");
});
//Theater Close Model
theaterClose.addEventListener("click", () => {
  theaterWindow.style.display = "none";
});

//Video Starting
thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const videoId = thumb.dataset.video;
    const currentTime = player.contentWindow?.postMessage ? lastTime : 0;
    videoOverlay.style.display = "none";
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&start=${Math.floor(
      currentTime
    )}&enablejsapi=1`;
  });
});

//waterfall sound

const waterfall = new WaterfallSound("#waterfall-img", "#waterfall-audio");

//switch
const darkToggle = document.getElementById("darkModeToggle");
const darkOverlay = document.getElementById("darkOverlay");

darkToggle.addEventListener("change", () => {
  if (darkToggle.checked) {
    darkOverlay.classList.add("active");
  } else {
    darkOverlay.classList.remove("active");
  }
});
