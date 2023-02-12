const buttons = document.querySelectorAll('.header__btn-menu, .sidebar__btn-menu, .sidebar__communication .btn-communication__item-call, .sidebar__communication .btn-communication__item-chat');
const menuSidebar = document.querySelector('.sidebar')
const callPopup = document.querySelector('.popup-call');
const feedbackPopup = document.querySelector('.popup-feedback');
const scrollLock = document.querySelector('body')
const overlay = document.querySelector('.overlay')

function openSidebar() {
    for (let button of buttons) {
        button.addEventListener('click', function (){
            if (button.matches('.header__btn-menu')) {
                menuSidebar.classList.toggle('sidebar--open')
                scrollLock.classList.add('scroll-lock')
                overlay.classList.add('overlay--active')
            } if (button.matches('.sidebar__btn-menu')) {
                menuSidebar.classList.toggle('sidebar--open')
                scrollLock.classList.remove('scroll-lock')
                overlay.classList.remove('overlay--active')
            } if (button.matches('.btn-communication__item-call')) {
                menuSidebar.classList.remove('sidebar--open')
                callPopup.classList.add('popup-call--open')
                scrollLock.classList.add('scroll-lock')
                overlay.classList.add('overlay--active')
            } if (button.matches('.btn-communication__item-chat')) {
                menuSidebar.classList.remove('sidebar--open')
                feedbackPopup.classList.add('popup-feedback--open')
                scrollLock.classList.add('scroll-lock')
                overlay.classList.add('overlay--active')
            }
        });
        document.addEventListener('keydown', function(event){
            if (event.code === 'Escape') {
                menuSidebar.classList.remove('sidebar--open')
                feedbackPopup.classList.remove('popup-feedback--open')
                callPopup.classList.remove('popup-call--open')
                scrollLock.classList.remove('scroll-lock')
                overlay.classList.remove('overlay--active')
            }
        });
        overlay.addEventListener('click', function (){
            menuSidebar.classList.remove('sidebar--open')
            scrollLock.classList.remove('scroll-lock')
            overlay.classList.remove('overlay--active')
        });
    }
}
openSidebar()