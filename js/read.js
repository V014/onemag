let slideIndex = 1;
showSlides(slideIndex)

// Next/previous controls using right and left arrow keys
document.onkeydown = function(event) {
  if (event.key === 'ArrowRight') {
    plusSlides(1);
  }
  if (event.key === 'ArrowLeft') {
    plusSlides(-1);
  }
}

// unblur cover image when it's fully loaded
const coverImage = document.getElementById('cover-image');
coverImage.onload = function() {
  coverImage.classList.remove('blur');
};

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("numbertext");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}