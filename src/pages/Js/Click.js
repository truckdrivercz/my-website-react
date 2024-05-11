const images = document.querySelectorAll(".image-container img");
const popupImage = document.querySelector(".popup-image");
const popupImg = document.querySelector(".popup-image img");
const leftArrow = document.querySelector(".popup-image .left");
const rightArrow = document.querySelector(".popup-image .right");
const currentIndexElement = document.querySelector(".popup-image .current-index");
const totalCountElement = document.querySelector(".popup-image .total-count");
let currentIndex = 1; // Začínáme od jedničky

images.forEach((image, index) => {
    image.onclick = () => {
        currentIndex = index + 1; // Začínáme od jedničky
        showPopupImage();
    };
});

document.querySelector(".popup-image .close").onclick = () => {
    popupImage.style.display = "none";
};

leftArrow.onclick = () => {
    currentIndex = currentIndex <= 1 ? images.length : currentIndex - 1; // Pokud je index menší nebo roven 1, nastavíme ho na poslední obrázek, jinak snížíme o 1
    updatePopupImage();
};

rightArrow.onclick = () => {
    currentIndex = currentIndex >= images.length ? 1 : currentIndex + 1; // Pokud je index větší nebo roven počtu obrázků, nastavíme ho na první obrázek, jinak zvýšíme o 1
    updatePopupImage();
};

function showPopupImage() {
    popupImage.style.display = "block";
    updatePopupImage();
}

function updatePopupImage() {
    popupImg.src = images[currentIndex - 1].getAttribute("src"); // Začínáme od jedničky
    updateArrowsVisibility();
    updateImageCounter();
}

function updateArrowsVisibility() {
    leftArrow.style.display = "block"; // Vždy zobrazíme šipku zpět, protože jsme opravili její chování
    rightArrow.style.display = "block";
}

function updateImageCounter() {
    currentIndexElement.textContent = currentIndex;
    totalCountElement.textContent = images.length;
}