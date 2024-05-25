let currentIndex = 0;
const images = document.querySelectorAll('.gallery img');
const buttons = document.querySelectorAll('.navigation button');
const totalImages = images.length;

function showImage(index) {
    images[currentIndex].classList.remove('active');
    images[currentIndex].classList.add('previous');
    images[index].classList.add('active');
    images[index].classList.remove('previous');
    buttons[currentIndex].classList.remove('active');
    buttons[index].classList.add('active');
    currentIndex = index;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const index = parseInt(button.getAttribute('data-index'));
        if (index !== currentIndex) {
            showImage(index);
        }
    });
});

function autoSlide() {
    let nextIndex = (currentIndex + 1) % totalImages;
    showImage(nextIndex);
}

setInterval(autoSlide, 20000);