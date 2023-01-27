const playerButton = document.querySelector('.player__button'),
      videos = document.querySelector('.player__videos'),
      playerClose = document.querySelector('.player__close');

function openVideos (e) {
  playerButton.classList.toggle('is-active');

  if (playerButton.classList.contains('is-active')) {
    videos.classList.add('open-videos')
    body.classList.add('body-active');
  } else {
    videos.classList.remove('open-videos')
    body.classList.remove('body-active');
  }
}

playerClose.addEventListener('click', () => {
  videos.classList.remove('open-videos');
  body.classList.remove('body-active')
  playerButton.classList.remove('is-active')
})

playerButton.addEventListener('click', openVideos);
