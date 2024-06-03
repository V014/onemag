window.onload = time();

function time() {
  const currentTime = new Date().getHours();
  if (currentTime < 18) {
    greeting = "Good morning";
  } else if (currentTime < 18){
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  const timeElement = document.getElementById("time");
  timeElement.innerText = greeting;
}
