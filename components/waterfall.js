/* const waterfallImg = document.querySelector("#waterfall-img");
const audio = document.querySelector("#waterfall-audio");

export default class waterfall {}

waterfallImg.addEventListener("mouseenter", () => {
  audio.currentTime = 0; //resets the audio
  audio.play();
});

waterfallImg.addEventListener("mouseleave", () => {
  audio.pause();
}); */

export class WaterfallSound {
  constructor(imageSelector, audioSelector) {
    this.image = document.querySelector(imageSelector);
    this.audio = document.querySelector(audioSelector);

    if (this.image && this.audio) {
      this.init();
    } else {
      console.error("WaterfallSound: Could not find image or audio element.");
    }
  }

  init() {
    this.image.addEventListener("mouseenter", () => {
      this.audio.currentTime = 0;
      this.audio.play();
    });

    this.image.addEventListener("mouseleave", () => {
      this.audio.pause();
    });
  }
}
