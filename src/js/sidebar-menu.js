const openSidebar = document.querySelector('.header__btn-menu')
const closeSidebar = document.querySelector('.sidebar__btn-menu')
const sidebar = document.querySelector('.sidebar')
const body = document.querySelector('body')
const overlay = document.querySelector('.overlay')

openSidebar.addEventListener('click', function () {
    sidebar.classList.toggle('sidebar--open')
    body.classList.add('body--block')
    overlay.classList.add('overlay--active')
});

closeSidebar.addEventListener('click', function () {
    sidebar.classList.toggle('sidebar--open')
    body.classList.remove('body--block')
    overlay.classList.remove('overlay--active')
});

overlay.addEventListener('click', function () {
    sidebar.classList.remove('sidebar--open')
    body.classList.remove('body--block')
    overlay.classList.remove('overlay--active')
});