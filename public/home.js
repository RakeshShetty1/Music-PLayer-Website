


function playSong(songUrl, buttonId) {
  var audio = document.getElementById('audioPlayer');
  var button = document.getElementById(buttonId);

  if (audio.paused || audio.src !== songUrl) {
    audio.src = songUrl;
    audio.play();
    button.classList.remove('bi-play-circle-fill');
    button.classList.add('bi-pause-circle-fill');

    // Reset previous button if exists
    var previousButton = document.querySelector('.bi-pause-circle-fill');
    if (previousButton && previousButton !== button) {
      previousButton.classList.remove('bi-pause-circle-fill');
      previousButton.classList.add('bi-play-circle-fill');
    }
  } else {
    audio.pause();
    button.classList.remove('bi-pause-circle-fill');
    button.classList.add('bi-play-circle-fill');
  }
}





var mysong = new Audio();

const playsongs = (songurl, id) => {
  mysong.src = songurl;
  mysong.play();

}


function pausesongs(songurl) {
  mysong.src = songurl;
  mysong.pause();
}
