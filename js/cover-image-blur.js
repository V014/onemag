// unblur cover image when it's fully loaded
const coverImage = document.getElementById('cover-image');
    coverImage.onload = function() {
    coverImage.classList.remove('blur');
}