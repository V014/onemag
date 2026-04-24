// change background color based on the dominant accent of the current image
function changeBackgroundColor() {
    // const img = document.querySelector('.mySlides img');
    const img = document.querySelector('img');
    if (!img) return;

    const colorThief = new ColorThief();
    const dominantColor = colorThief.getColor(img);
    const rgbColor = `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`;

    document.body.style.backgroundColor = rgbColor;
}

// Change background color when the page loads
window.onload = changeBackgroundColor;

// Change background color when the slide changes
document.querySelectorAll('.mySlides').forEach(slide => {
    slide.addEventListener('transitionend', changeBackgroundColor);
});