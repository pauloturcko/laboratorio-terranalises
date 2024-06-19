document.addEventListener('DOMContentLoaded', () => {
    const rotasContainer = document.querySelector('.logistica__rotas');
    const images = document.querySelectorAll('.logistica__imagem');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentIndex = 0;
    const totalImages = images.length;

    function updateCarousel() {
        images.forEach((img, index) => {
            img.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalImages - 1;
        }
        updateCarousel();
    });

    updateCarousel();
});
