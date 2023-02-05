const openSidebarFeedback = document.querySelector('.header__block-communication .btn-communication__item:nth-child(1)')
const openSidebarMenu = document.querySelector('.sidebar__communication .btn-communication__item:nth-child(1)')
const closeSidebarFeedback = document.querySelector('.sidebar-call__close')
const sidebar = document.querySelector('.sidebar-call')
const sidebarMenu = document.querySelector('.sidebar')
const body = document.querySelector('body')
const overlay = document.querySelector('.overlay')

openSidebarFeedback.addEventListener('click', function () {
    sidebar.classList.toggle('sidebar-call--open')
    body.classList.add('body--block')
    overlay.classList.add('overlay--active')
});

openSidebarMenu.addEventListener('click', function () {
    sidebarMenu.classList.remove('sidebar--open')
    sidebar.classList.add('sidebar-call--open')
    body.classList.add('body--block')
    overlay.classList.add('overlay--active')
});

closeSidebarFeedback.addEventListener('click', function () {
    sidebar.classList.toggle('sidebar-call--open')
    body.classList.remove('body--block')
    overlay.classList.remove('overlay--active')
});

overlay.addEventListener('click', function () {
    sidebar.classList.remove('sidebar-call--open')
    body.classList.remove('body--block')
    overlay.classList.remove('overlay--active')
});