const song = document.getElementById('song');
// Plays music when user presses 'P" and stops the music using 'S' and 'M' pauses the music
document.onkeypress = function(event) {
  if (event.key === 'p' || event.key === 'P') {
    song.play();
  } else if (event.key === 's' || event.key === 'S') {
    song.load();
  }
    else if (event.key === 'm' || event.key === 'M') {
    song.pause();
  } 
};