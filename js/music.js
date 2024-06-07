const song = document.getElementById('song');
// Plays music when user presses 'P" and stops the music using 'S'
document.onkeydown = function(event) {
  if (event.key === 'p' || event.key === 'P') {
    song.play();
  } else if (event.key === 's' || event.key === 'S') {
    song.pause();
  } else {
    alert('Background feature unavailable!');
  }
};