window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add("playing");
  audio.currentTime = 0; // rewinds to start if event fires in succession
  audio.play();
});

// Method 1: For removing "playing" class after the transition completes we can use "transitionend" event.

const keys = document.querySelectorAll(".key");
keys.forEach((key) =>
  key.addEventListener("transitionend", function (e) {
    if (e.propertyName != "transform") return;
    this.classList.remove("playing");
  })
);

// Method 2: Here we can stop the transition by removing the "playing" class in "keyup" event handler, but
// if the transition is longer then you might not see the transition because "keyup" event fires immediately
// after "keydown" event. Hence use "transitionend" event to remove the "playing" class after the transition.

// window.addEventListener("keyup", (e) => {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   if (!audio) return;
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   key.classList.remove("playing");
// });
