const buttons = document.querySelectorAll('.header__block-communication .btn-communication__item-call, .popup-call__close, .header__block-communication .btn-communication__item-chat, .popup-feedback__close');
const callPopup = document.querySelector('.popup-call');
const feedbackPopup = document.querySelector('.popup-feedback');
const scrollLock = document.querySelector('body');
const overlay = document.querySelector('.overlay');

function openPopup() {
    for(let button of buttons) {
        button.addEventListener('click', function (){
            if (button.matches('.btn-communication__item-call')) {
                callPopup.classList.toggle('popup-call--open')
                scrollLock.classList.add('scroll-lock')
                overlay.classList.add('overlay--active')
            } if (button.closest('.popup-call')) {
                callPopup.classList.toggle('popup-call--open')
                scrollLock.classList.remove('scroll-lock')
                overlay.classList.remove('overlay--active')
            } if (button.matches('.btn-communication__item-chat')) {
                feedbackPopup.classList.toggle('popup-feedback--open')
                scrollLock.classList.add('scroll-lock')
                overlay.classList.add('overlay--active')
            } if (button.closest('.popup-feedback')) {
                feedbackPopup.classList.remove('popup-feedback--open')
                scrollLock.classList.remove('scroll-lock')
                overlay.classList.remove('overlay--active')
            }
        });
        overlay.addEventListener('click', function () {
            feedbackPopup.classList.remove('popup-feedback--open')
            callPopup.classList.remove('popup-call--open')
            scrollLock.classList.remove('scroll-lock')
            overlay.classList.remove('overlay--active')
        });
    }
}
openPopup()