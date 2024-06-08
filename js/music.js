const audioElement = document.getElementById("song");

audioElement.addEventListener("timeupdate", function() {
  const currentTime = audioElement.currentTime;
  const duration = audioElement.duration;
  const progress = (currentTime / duration) * 100;

  // Update your progress bar or display here
  console.log(`Song progress: ${progress}%`);
});

audioElement.addEventListener("play", function() {
    console.log("Song is playing");
  });
  
  audioElement.addEventListener("pause", function() {
    console.log("Song is paused");
  });

audioElement.play(); // Play the song
audioElement.pause(); // Pause the song