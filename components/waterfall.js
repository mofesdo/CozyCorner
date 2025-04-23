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
      this.audio.volume = .5;
      this.audio.play();
    });

    this.image.addEventListener("mouseleave", () => {
      this.audio.pause();
    });
  }
}
