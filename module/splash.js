// Fade and remove splash element
const body = document.querySelector('body');
body.style.overflow = 'hidden';
const splash = document.querySelector('#splash');
const splashFade = setTimeout(function () {
  splash.style.opacity = 0;
  const splashZ = setTimeout(function () {
    splash.remove();
    body.style.overflow = 'visible';
  }, 500);
}, 1000);
