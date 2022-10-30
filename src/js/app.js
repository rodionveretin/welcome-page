
const videoElem = document.querySelector('video');
const playButton = document.querySelector('.greeting__button');
const background = document.querySelector('.greeting__background');
const pause = document.querySelector('#pause');
const play = document.querySelector('#play');
const previewPicture = document.querySelector('.greeting__preview');


playButton.addEventListener('click', handlePlayButton, false);

async function playVideo() {
  try {
    await videoElem.play();
    playButton.classList.add('playing');
  } catch (err) {
    playButton.classList.remove('playing');
  }
}

function handlePlayButton() {
  if (videoElem.paused) {
    previewPicture.classList.add('hidden');
    playVideo();
    background.classList.add('greeting__background--hidden');
    pause.classList.remove('hidden');
    play.classList.add('hidden');
  } else {
    videoElem.pause();
    background.classList.remove('greeting__background--hidden');
    pause.classList.add('hidden');
    play.classList.remove('hidden');
  }
}

background.addEventListener('mouseover', () => {
  playButton.classList.remove('greeting__button--hidden');
});

background.addEventListener('mouseout', () => {
  if (!videoElem.paused) {
    playButton.classList.add('greeting__button--hidden');
  }
});
