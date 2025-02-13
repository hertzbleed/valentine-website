const gifUrls = [
    "https://media1.tenor.com/m/qyrDYRLVwuUAAAAC/kuromi-soft.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGd2bDkzMjNjM215bmp4ZnE1MDY2aGpqMXZyZWhxbnl0MnppejdyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oaYB0u8fXMKJyFe81K/giphy.gif",
    "https://i.ibb.co/tpbVYgBJ/pixel-suit.jpg"
];

const alternativeGifs = [
    "https://media1.tenor.com/m/dgRPANR84nQAAAAd/cat-rage.gif",
    "https://media1.tenor.com/m/xRF_8aickxwAAAAd/silly-cat-silly-car.gif",
    "https://i.ibb.co/YTKLXZ36/koteons-20250213-0001.jpg"
];

function setRandomGif() {
    const randomIndex = Math.floor(Math.random() * gifUrls.length);
    document.getElementById("random-gif").src = gifUrls[randomIndex];
}

document.addEventListener("DOMContentLoaded", setRandomGif);

const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;
let noClicked = false;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    // Hide side images when No is clicked
    document.getElementById("left-image").style.opacity = "0";
    document.getElementById("right-image").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("left-image").style.display = "none";
        document.getElementById("right-image").style.display = "none";
    }, 500);

    if (!noClicked) {
        noClicked = true;
        let randomIndex = Math.floor(Math.random() * alternativeGifs.length);
        let fullscreenGif = document.createElement("img");

        fullscreenGif.src = alternativeGifs[randomIndex];
        fullscreenGif.classList.add("fullscreen-gif");

        document.body.appendChild(fullscreenGif);

        setTimeout(() => {
            fullscreenGif.style.opacity = "0";
            setTimeout(() => {
                document.body.removeChild(fullscreenGif);
            }, 500);
        }, 2500);
    }

    // Continue original No button functionality
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}