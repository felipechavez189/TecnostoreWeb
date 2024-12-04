let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

// Función para mover el carrusel hacia la izquierda
function moveLeft() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalImages - 1; // Al llegar al principio, va al final
    }
    updateCarousel();
}

// Función para mover el carrusel hacia la derecha
function moveRight() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0; // Al llegar al final, va al principio
    }
    updateCarousel();
}

// Actualiza la posición del carrusel
function updateCarousel() {
    const newTransformValue = -currentIndex * (images[0].clientWidth + 20); // 20 es el margen entre las imágenes
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue}px)`;
}

// Asignar eventos a las flechas
document.querySelector('.prev-btn').addEventListener('click', moveLeft);
document.querySelector('.next-btn').addEventListener('click', moveRight);
