const openSidebar = document.querySelector('.header__block-communication .btn-communication__item:nth-child(2)')
const openSidebarMenu = document.querySelector('.sidebar__communication .btn-communication__item:nth-child(2)')
const closeSidebar = document.querySelector('.sidebar-fb__close')
const sidebar = document.querySelector('.sidebar-fb')
const sidebarMenu = document.querySelector('.sidebar')
const body = document.querySelector('body')
const overlay = document.querySelector('.overlay')

openSidebar.addEventListener('click', function () {
    sidebar.classList.add('sidebar-fb--open')
    body.classList.add('body--block')
    overlay.classList.add('overlay--active')
});

openSidebarMenu.addEventListener('click', function () {
    sidebarMenu.classList.remove('sidebar--open')
    sidebar.classList.add('sidebar-fb--open')
    body.classList.add('body--block')
    overlay.classList.add('overlay--active')
});

closeSidebar.addEventListener('click', function () {
    sidebar.classList.remove('sidebar-fb--open')
    body.classList.remove('body--block')
    overlay.classList.remove('overlay--active')
});

overlay.addEventListener('click', function () {
    sidebar.classList.remove('sidebar-fb--open')
    body.classList.remove('body--block')
    overlay.classList.remove('overlay--active')
});