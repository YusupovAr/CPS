const openMenuSidebar = document.querySelector('.header__btn-menu')
const closeMenuSidebar = document.querySelector('.sidebar__btn-menu')
const menuSidebar = document.querySelector('.sidebar')
const scrollLock = document.querySelector('body')
const overlay = document.querySelector('.overlay')

openMenuSidebar.addEventListener('click', function () {
    menuSidebar.classList.toggle('sidebar--open')
    scrollLock.classList.add('scroll-lock')
    overlay.classList.add('overlay--active')
});

closeMenuSidebar.addEventListener('click', function () {
    menuSidebar.classList.toggle('sidebar--open')
    scrollLock.classList.remove('scroll-lock')
    overlay.classList.remove('overlay--active')
});

overlay.addEventListener('click', function () {
    menuSidebar.classList.remove('sidebar--open')
    scrollLock.classList.remove('scroll-lock')
    overlay.classList.remove('overlay--active')
});