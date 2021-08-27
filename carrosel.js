let time = 3000,
    currentIndex = 0,
    images = document.querySelectorAll("#slider .slider-div img"), // array das images
    paragraphs = document.querySelectorAll("#slider .slider-div p"), // array dos p
    maxImg = images.length,
    maxP = paragraphs.length;


function nextImage() {
  images[currentIndex].classList.remove("selected");
  paragraphs[currentIndex].classList.remove("selected");

  currentIndex++;

  if (currentIndex >= maxImg && currentIndex >= maxP) {
    currentIndex = 0;
  }

  images[currentIndex].classList.add("selected");
  paragraphs[currentIndex].classList.add("selected");
}

function start() {
  setInterval(() => {
    // troca de imagem
    nextImage();
  }, time);
}

window.addEventListener("load", start);
