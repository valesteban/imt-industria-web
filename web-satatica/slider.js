document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".carousel-slide");
    const slides = Array.from(slider.children);
    const navDots = document.querySelectorAll(".slider-nav a");
    let currentIndex = 0; 
    const intervalTime = 3000; // Tiempo entre deslizamientos automáticos en milisegundos
    let autoSlideInterval;

    // Función para cambiar el slide
    const changeSlide = (index) => {
        // Asegurarse de que el índice esté dentro del rango
        currentIndex = (index + slides.length) % slides.length;

        // Mover el carrusel
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Actualizar los puntos de navegación
        navDots.forEach(dot => dot.classList.remove("active"));
        navDots[currentIndex].classList.add("active");
    };

    // Función para iniciar el auto-slide
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => {
            changeSlide(currentIndex + 1);
        }, intervalTime);
    };

    // Función para detener el auto-slide
    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };

    // Agregar eventos a los puntos de navegación
    navDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            stopAutoSlide(); // Detener el auto-slide al hacer clic
            changeSlide(index);
            startAutoSlide(); // Reiniciar el auto-slide
        });
    });

    // Iniciar el carrusel automático
    startAutoSlide();

    // Opcional: Pausar el slider cuando el mouse pase por encima
    slider.addEventListener("mouseover", stopAutoSlide);
    slider.addEventListener("mouseout", startAutoSlide);
});
