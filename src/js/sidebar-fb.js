const openFbSidebar = document.querySelector('.header__block-communication .btn-communication__item:nth-child(2)')
const closeFbSidebar = document.querySelector('.sidebar-fb__close')
const openMenuSidebar = document.querySelector('.sidebar__communication .btn-communication__item:nth-child(2)')
const fbSidebar = document.querySelector('.sidebar-fb')
const menuSidebar = document.querySelector('.sidebar')
const scrollLock = document.querySelector('body')
const overlay = document.querySelector('.overlay')

openFbSidebar.addEventListener('click', function () {
    fbSidebar.classList.add('sidebar-fb--open')
    scrollLock.classList.add('scroll-lock')
    overlay.classList.add('overlay--active')
});

openMenuSidebar.addEventListener('click', function () {
    menuSidebar.classList.remove('sidebar--open')
    fbSidebar.classList.add('sidebar-fb--open')
    scrollLock.classList.add('scroll-lock')
    overlay.classList.add('overlay--active')
});

closeFbSidebar.addEventListener('click', function () {
    fbSidebar.classList.remove('sidebar-fb--open')
    scrollLock.classList.remove('scroll-lock')
    overlay.classList.remove('overlay--active')
});

overlay.addEventListener('click', function () {
    fbSidebar.classList.remove('sidebar-fb--open')
    scrollLock.classList.remove('scroll-lock')
    overlay.classList.remove('overlay--active')
});