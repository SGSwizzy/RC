import Swiper, { Navigation,Pagination, Lazy  } from 'swiper';

/**
 * Карусель
 * @type {Swiper}
 */
const carousel = new Swiper(".js-carousel", {
    modules: [Navigation, Lazy ],
    slidesPerView: 1,
    lazy: true,
    spaceBetween: 32,
    navigation: {
        nextEl: ".js-carousel-button-next",
        prevEl: ".js-carousel-button-prev",
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

const carouselWiki = new Swiper(".js-carousel--wiki", {
    modules: [Navigation, Lazy ],
    slidesPerView: 1,
    lazy: true,
    spaceBetween: 32,
    autoHeight: true,
    navigation: {
        nextEl: ".js-carousel-button-next",
        prevEl: ".js-carousel-button-prev",
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 3,
        },
    }
});

const carouselService = new Swiper(".js-carousel--service", {
    modules: [Navigation, Lazy ],
    slidesPerView: 1,
    lazy: true,
    spaceBetween: 32,
    navigation: {
        nextEl: ".js-carousel-button-next",
        prevEl: ".js-carousel-button-prev",
    },
});

const carouselBanner = new Swiper(".js-banner-carousel", {
    modules: [Navigation,Pagination, Lazy ],
    slidesPerView: 1,
    lazy: true,
    spaceBetween: 32,
    navigation: {
        nextEl: ".js-carousel-button-next",
        prevEl: ".js-carousel-button-prev",
    },
    pagination: {
        el:'.js-carousel-pagination',
        clickable: true
    }
});