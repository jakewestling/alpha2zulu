// Play and Pause Button
let playPauseBtns = document.querySelectorAll('.play-pause-btn');
playPauseBtns.forEach(function (playPauseBtn) {
  // Play and Pause on Click
  playPauseBtn.addEventListener('click', toggleAudio);
});

// Alphabet Object - Use bracket notation alphabet['x-ray'] to reference because of x-ray
let alphabet = {
  alfa: {
    symbol: 'a',
    pronunciation: 'AL fah',
    audioFile: 'alfa.mp3',
    audioElementIsCreated: false
  },
  bravo: {
    symbol: 'b',
    pronunciation: 'BRAH voh',
    audioFile: 'bravo.mp3',
    audioElementIsCreated: false
  },
  charlie: {
    symbol: 'c',
    pronunciation: 'CHAR lee',
    audioFile: 'charlie.mp3',
    audioElementIsCreated: false
  },
  delta: {
    symbol: 'd',
    pronunciation: 'DEL tah',
    audioFile: 'delta.mp3',
    audioElementIsCreated: false
  },
  echo: {
    symbol: 'e',
    pronunciation: 'EKK oh',
    audioFile: 'echo.mp3',
    audioElementIsCreated: false
  },
  foxtrot: {
    symbol: 'f',
    pronunciation: 'FOKS trot',
    audioFile: 'foxtrot.mp3',
    audioElementIsCreated: false
  },
  golf: {
    symbol: 'g',
    pronunciation: 'Golf',
    audioFile: 'golf.mp3',
    audioElementIsCreated: false
  },
  hotel: {
    symbol: 'h',
    pronunciation: 'HO tell',
    audioFile: 'hotel.mp3',
    audioElementIsCreated: false
  },
  india: {
    symbol: 'i',
    pronunciation: 'IN dee ah',
    audioFile: 'india.mp3',
    audioElementIsCreated: false
  },
  juliett: {
    symbol: 'j',
    pronunciation: 'JEW lee ett',
    audioFile: 'juliett.mp3',
    audioElementIsCreated: false
  },
  kilo: {
    symbol: 'k',
    pronunciation: 'KEY loh',
    audioFile: 'kilo.mp3',
    audioElementIsCreated: false
  },
  lima: {
    symbol: 'l',
    pronunciation: 'LEE mah',
    audioFile: 'lima.mp3',
    audioElementIsCreated: false
  },
  mike: {
    symbol: 'm',
    pronunciation: 'Mike',
    audioFile: 'mike.mp3',
    audioElementIsCreated: false
  },
  november: {
    symbol: 'n',
    pronunciation: 'NOH vem ber',
    audioFile: 'november.mp3',
    audioElementIsCreated: false
  },
  oscar: {
    symbol: 'o',
    pronunciation: 'OSS car',
    audioFile: 'oscar.mp3',
    audioElementIsCreated: false
  },
  papa: {
    symbol: 'p',
    pronunciation: 'PAH pah',
    audioFile: 'papa.mp3',
    audioElementIsCreated: false
  },
  quebec: {
    symbol: 'q',
    pronunciation: 'keh BECK',
    audioFile: 'quebec.mp3',
    audioElementIsCreated: false
  },
  romeo: {
    symbol: 'r',
    pronunciation: 'ROW me oh',
    audioFile: 'romeo.mp3',
    audioElementIsCreated: false
  },
  sierra: {
    symbol: 's',
    pronunciation: 'see AIR ah',
    audioFile: 'sierra.mp3',
    audioElementIsCreated: false
  },
  tango: {
    symbol: 't',
    pronunciation: 'TANG go',
    audioFile: 'tango.mp3',
    audioElementIsCreated: false
  },
  uniform: {
    symbol: 'u',
    pronunciation: 'YOU nee form',
    audioFile: 'uniform.mp3',
    audioElementIsCreated: false
  },
  victor: {
    symbol: 'v',
    pronunciation: 'VIK ter',
    audioFile: 'victor.mp3',
    audioElementIsCreated: false
  },
  whiskey: {
    symbol: 'w',
    pronunciation: 'WISS key',
    audioFile: 'whiskey.mp3',
    audioElementIsCreated: false
  },
  'x-ray': {
    symbol: 'x',
    pronunciation: 'EKS ray',
    audioFile: 'x-ray.mp3',
    audioElementIsCreated: false
  },
  yankee: {
    symbol: 'y',
    pronunciation: 'YANG kee',
    audioFile: 'yankee.mp3',
    audioElementIsCreated: false
  },
  zulu: {
    symbol: 'z',
    pronunciation: 'ZOO luu',
    audioFile: 'zulu.mp3',
    audioElementIsCreated: false
  },
  zero: {
    symbol: '0',
    pronunciation: 'ZE-RO',
    audioFile: 'zero.mp3',
    audioElementIsCreated: false
  },
  one: {
    symbol: '1',
    pronunciation: 'WUN',
    audioFile: 'one.mp3',
    audioElementIsCreated: false
  },
  two: {
    symbol: '2',
    pronunciation: 'TOO',
    audioFile: 'two.mp3',
    audioElementIsCreated: false
  },
  three: {
    symbol: '3',
    pronunciation: 'TREE',
    audioFile: 'three.mp3',
    audioElementIsCreated: false
  },
  four: {
    symbol: '4',
    pronunciation: 'FOW-ER',
    audioFile: 'four.mp3',
    audioElementIsCreated: false
  },
  five: {
    symbol: '5',
    pronunciation: 'FIFE',
    audioFile: 'five.mp3',
    audioElementIsCreated: false
  },
  six: {
    symbol: '6',
    pronunciation: 'SIX',
    audioFile: 'six.mp3',
    audioElementIsCreated: false
  },
  seven: {
    symbol: '7',
    pronunciation: 'SEV-EN',
    audioFile: 'seven.mp3',
    audioElementIsCreated: false
  },
  eight: {
    symbol: '8',
    pronunciation: 'AIT',
    audioFile: 'eight.mp3',
    audioElementIsCreated: false
  },
  nine: {
    symbol: '9',
    pronunciation: 'NIN-ER',
    audioFile: 'nine.mp3',
    audioElementIsCreated: false
  }
};

function toggleAudio() {
  // Get code word from DOM based on click location
  let codeWordDOM = this.parentElement.parentElement.querySelector('.code-word').innerText.toLowerCase();
  // Create audio element if it doesn't exist, return that audio element
  let audio = createAudioElement(codeWordDOM, this);


  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  togglePlayIcon(this);
}

// Create new audio element, add event ended event listener
let generatedAudioDOM = document.getElementsByClassName('generated-audio')[0];

function createAudioElement(codeWordDOM, self) {
  let audio;
  let audioSource = `./audio/${alphabet[codeWordDOM].audioFile}`;
  if (!alphabet[codeWordDOM].audioElementIsCreated) {
    console.log(`createAudioElement: ${codeWordDOM}`);
    audio = document.createElement('audio');
    audio.src = audioSource;
    audio.setAttribute('type', 'audio/mpeg');
    audio.className = codeWordDOM;
    generatedAudioDOM.appendChild(audio);
    console.log(generatedAudioDOM);
    alphabet[codeWordDOM].audioElementIsCreated = true;
    // Add event listener for icon at end
    audio.addEventListener('ended', function () {
      togglePlayIcon(self);
    });
  } else {
    audio = document.querySelector(`.${codeWordDOM}`);
  }
  return audio;
}

// Swap between speaker and pause icons
function togglePlayIcon(self) {
  // Remove speaker icon classes
  self.classList.toggle('fas');
  self.classList.toggle('fa-volume-up');
  // Add pause icon classes
  self.classList.toggle('far');
  self.classList.toggle('fa-lg');
  self.classList.toggle('fa-pause-circle');
}


