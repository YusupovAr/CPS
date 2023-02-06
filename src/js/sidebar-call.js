const openCallSidebar = document.querySelector('.header__block-communication .btn-communication__item:nth-child(1)')
const closeCallSidebar = document.querySelector('.sidebar-call__close')
const openMenuSidebar = document.querySelector('.sidebar__communication .btn-communication__item:nth-child(1)')
const callSidebar = document.querySelector('.sidebar-call')
const menuSidebar = document.querySelector('.sidebar')
const scrollLock = document.querySelector('body')
const overlay = document.querySelector('.overlay')

openCallSidebar.addEventListener('click', function () {
    callSidebar.classList.toggle('sidebar-call--open')
    scrollLock.classList.add('scroll-lock')
    overlay.classList.add('overlay--active')
});

openMenuSidebar.addEventListener('click', function () {
    menuSidebar.classList.remove('sidebar--open')
    callSidebar.classList.add('sidebar-call--open')
    scrollLock.classList.add('scroll-lock')
    overlay.classList.add('overlay--active')
});

closeCallSidebar.addEventListener('click', function () {
    callSidebar.classList.toggle('sidebar-call--open')
    scrollLock.classList.remove('scroll-lock')
    overlay.classList.remove('overlay--active')
});

overlay.addEventListener('click', function () {
    callSidebar.classList.remove('sidebar-call--open')
    scrollLock.classList.remove('scroll-lock')
    overlay.classList.remove('overlay--active')
});