var slider = document.getElementById("progressBar");
var progress = document.getElementById("progress");
var button = document.getElementById("play");

var widthBar = parseInt(window.getComputedStyle(progress).width);
var widthProgress = parseInt(window.getComputedStyle(slider).width);

var result = Math.round((widthBar/widthProgress)*100);

function move(){
    setInterval(addFrame, 10);
    function addFrame(){
        if(result < 100) {
            result = result + 1;
            progress.style.width = result + "%";
            progress.innerHTML = result + "%";
        } 
    }
}

button.addEventListener("click", function() {
    move();
})

const song = document.getElementById('song');
// Plays music when user presses 'P" and stops the music using 'S' and 'M' pauses the music
document.onkeydown = function(event) {
  if (event.key === 'p' || event.key === 'P') {
    song.play();
  } else if (event.key === 's' || event.key === 'S') {
    song.load();
  }
    else if (event.key === 'm' || event.key === 'M') {
    song.pause();
  } 
};