function time() {
  const currentTime = new Date().getHours();
  if (currentTime < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  const timeElement = document.getElementById("time");
  timeElement.innerText = greeting;
}
