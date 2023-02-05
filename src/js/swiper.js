function mySwiper() {
    if (window.matchMedia('(width < 768px)').matches) {
        new Swiper('.swiper', {
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
    }
};
mySwiper();