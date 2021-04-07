// Play and Pause Button
let playPauseBtns = document.querySelectorAll('.play-pause-btn');
playPauseBtns.forEach(function (playPauseBtn) {
  // Play and Pause on Click
  playPauseBtn.addEventListener('click', toggleAudio);
});


let audioLibrary = {
  a: 'alfa.mp3',
  b: 'bravo.mp3',
  c: 'charlie.mp3',
  d: 'delta.mp3',
  e: 'echo.mp3',
  f: 'foxtrot.mp3',
  g: 'golf.mp3',
  h: 'hotel.mp3',
  i: 'india.mp3',
  j: 'juliett.mp3',
  k: 'kilo.mp3',
  l: 'lima.mp3',
  m: 'mike.mp3',
  n: 'november.mp3',
  o: 'oscar.mp3',
  p: 'papa.mp3',
  q: 'quebec.mp3',
  r: 'romeo.mp3',
  s: 'sierra.mp3',
  t: 'tango.mp3',
  u: 'uniform.mp3',
  v: 'victor.mp3',
  w: 'whiskey.mp3',
  x: 'xray.mp3',
  y: 'yankee.mp3',
  z: 'zulu.mp3',
  number0: 'zero.mp3',
  number1: 'one.mp3',
  number2: 'two.mp3',
  number3: 'three.mp3',
  number4: 'four.mp3',
  number5: 'five.mp3',
  number6: 'six.mp3',
  number7: 'seven.mp3',
  number8: 'eight.mp3',
  number9: 'nine.mp3'
}




// Create audio element dynamically (on first click)
// let audio;
let symbolDOM;
function createAudioElement() {
  let audio;
  audio = document.createElement('audio');
  // Choose correct audio file for button based on DOM  
  // symbolDOM = self.parentElement.parentElement.querySelector('.symbol').innerText.toLowerCase();
  console.log(symbolDOM);
  let correctFile = audioLibrary[symbolDOM];
  console.log(correctFile);

  audio.src = `../audio/alfa.mp3`;
  // audio.src = `../audio/${correctFile}`;
  audio.type = 'audio/mpeg'
  isCreated = true;
  // Reset Icon at end of track
  audio.addEventListener('ended', togglePlayIcon);
}



let isCreated = false;
let self;
function toggleAudio() {
  self = this;
  // console.log(this);
  // console.log(this.parentElement.parentElement.querySelector('.symbol').innerText.toLowerCase());
  if (!isCreated) {
    createAudioElement();
  }
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  togglePlayIcon();
}

// Swap between speaker and pause icons
function togglePlayIcon() {
  // Remove speaker icon classes
  self.classList.toggle('fas');
  self.classList.toggle('fa-volume-up');
  // Add pause icon classes
  self.classList.toggle('far');
  self.classList.toggle('fa-lg');
  self.classList.toggle('fa-pause-circle');
}


