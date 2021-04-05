// Play and Pause Button

let audio = document.querySelector('#test-audio');
let playPauseBtn = document.querySelector('.play-pause-btn');

// Play and Pause on Click
playPauseBtn.addEventListener('click', toggleAudio);
function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  togglePlayIcon();
}
// Reset Icon at end of track
audio.addEventListener('ended', togglePlayIcon);

// Swap between speaker and pause icons
function togglePlayIcon() {
  console.log('changed');
  // Remove speaker icon classes
  playPauseBtn.classList.toggle('fas');
  playPauseBtn.classList.toggle('fa-volume-up');
  // Add pause icon classes
  playPauseBtn.classList.toggle('far');
  playPauseBtn.classList.toggle('fa-lg');
  playPauseBtn.classList.toggle('fa-pause-circle');
}