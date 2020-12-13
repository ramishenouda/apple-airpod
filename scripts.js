const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

const section = document.querySelector('section');
const end = section.querySelector('h1');

const FRAMES = 148;
const FPS = 60;

window.addEventListener('scroll', function (e) {
    var time = (window.scrollY / 1000) * FRAMES / FPS;
    video.currentTime = time;
});
