import Swiper, { Navigation, Pagination } from 'swiper';

function mySwiper() {
    if (window.matchMedia('(width < 768px)').matches) {
        new Swiper('.swiper', {
            modules: [Navigation, Pagination],
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
    }
};
mySwiper();