import Swiper, { Navigation, Pagination } from 'swiper';
let mySwiper = undefined;

function initSwiper() {
    let screenWidth = window.innerWidth;
    if (screenWidth < 768 && mySwiper === undefined) {
        mySwiper = new Swiper('.swiper', {
            modules: [Navigation, Pagination],
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
    } if (screenWidth > 768 && mySwiper != undefined) {
        for (let swiper of mySwiper) {
            swiper.destroy(true, true);
        }
        mySwiper = undefined;
    }
}
initSwiper()
window.addEventListener('resize', function() {
    initSwiper()
});