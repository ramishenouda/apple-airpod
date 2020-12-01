const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

// section 2
const section = document.querySelector('section');
const end = section.querySelector('h1');

// ScrollMagic
const controller = new ScrollMagic.Controller();

// Scenes
let scene = new ScrollMagic.Scene({
    duration: 4660,
    triggerElement: intro,
    triggerHook: 0
})
.setPin(intro)
.addTo(controller);


// Video animation
let accelAmount = 0.1;
let scrollPos = 0;
let delay = 0;
let reversing = false;

scene.on("update", e => {
    scrollPos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollPos - delay) * accelAmount;
    video.currentTime = delay;
}, 60);
