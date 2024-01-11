const slides = [
    '<div class="carousel__slide"><img src="img/meijer.jpg"  alt="Meijer Logo"></div>',
    '<div class="carousel__slide"><img src="img/safeway.jpg"  alt="Safeway Logo"></div>',
    '<div class="carousel__slide"><img src="img/drager.jpg"  alt="Drager Logo"></div>',
    '<div class="carousel__slide"><img src="img/bexen.jpg"  alt="Bexen Logo"></div>',
    '<div class="carousel__slide"><img src="img/costco.jpg"  alt="Costco Logo"></div>',
    '<div class="carousel__slide"><img src="img/cdn.jpg"  alt="CDN Logo"></div>',
];

let currentSlideIdx = 0;

function updateCarousel() {
    let carouselDomString = "";
    const numSlidesToShow = window.matchMedia('(min-width: 1200px)').matches
        ? 5
        : window.matchMedia('(min-width: 767px)').matches
            ? 3
            : window.matchMedia('(min-width: 468px)').matches
                ? 2
                : 1;

    for (let i = 0; i < numSlidesToShow; i++) {
        const index = (currentSlideIdx + i) % slides.length;
        carouselDomString += slides[index];
    }
    const slideContainer = document.querySelector('.carousel-clients__slide');
    slideContainer.innerHTML = carouselDomString;
}

function nextSlide() {
    currentSlideIdx = (currentSlideIdx + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    currentSlideIdx = (currentSlideIdx - 1 + slides.length) % slides.length;
    updateCarousel();
}

updateCarousel();

const buttonNext = document.querySelector('.carousel-clients__button-next');
buttonNext.addEventListener('click', nextSlide);

const buttonPrev = document.querySelector('.carousel-clients__button-prev');
buttonPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', updateCarousel);

