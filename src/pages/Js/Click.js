const images = document.querySelectorAll(".image-container img");
const popupImage = document.querySelector(".popup-image");
const popupImg = document.querySelector(".popup-image img");
const leftArrow = document.querySelector(".popup-image .left");
const rightArrow = document.querySelector(".popup-image .right");
const currentIndexElement = document.querySelector(".popup-image .current-index");
const totalCountElement = document.querySelector(".popup-image .total-count");
let currentIndex = 1; // ZaÄŤĂ­nĂˇme od jedniÄŤky

images.forEach((image, index) => {
    image.onclick = () => {
        currentIndex = index + 1; // ZaÄŤĂ­nĂˇme od jedniÄŤky
        showPopupImage();
    };
});

document.querySelector(".popup-image .close").onclick = () => {
    popupImage.style.display = "none";
};

leftArrow.onclick = () => {
    currentIndex = currentIndex <= 1 ? images.length : currentIndex - 1; // Pokud je index menĹˇĂ­ nebo roven 1, nastavĂ­me ho na poslednĂ­ obrĂˇzek, jinak snĂ­ĹľĂ­me o 1
    updatePopupImage();
};

rightArrow.onclick = () => {
    currentIndex = currentIndex >= images.length ? 1 : currentIndex + 1; // Pokud je index vÄ›tĹˇĂ­ nebo roven poÄŤtu obrĂˇzkĹŻ, nastavĂ­me ho na prvnĂ­ obrĂˇzek, jinak zvĂ˝ĹˇĂ­me o 1
    updatePopupImage();
};

function showPopupImage() {
    popupImage.style.display = "block";
    updatePopupImage();
}

function updatePopupImage() {
    popupImg.src = images[currentIndex - 1].getAttribute("src"); // ZaÄŤĂ­nĂˇme od jedniÄŤky
    updateArrowsVisibility();
    updateImageCounter();
}

function updateArrowsVisibility() {
    leftArrow.style.display = "block"; // VĹľdy zobrazĂ­me Ĺˇipku zpÄ›t, protoĹľe jsme opravili jejĂ­ chovĂˇnĂ­
    rightArrow.style.display = "block";
}

function updateImageCounter() {
    currentIndexElement.textContent = currentIndex;
    totalCountElement.textContent = images.length;
}