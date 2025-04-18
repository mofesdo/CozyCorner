const waterfallImg = document.querySelector("#waterfall-img");
const audio = document.querySelector("#waterfall-audio");

waterfallImg.addEventListener("mouseenter", () => {
  audio.currentTime = 0; //resets the audio
  audio.play();
});

waterfallImg.addEventListener("mouseleave", () => {
  audio.pause();
});
