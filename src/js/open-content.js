const buttons = document.querySelectorAll('.btn-dropdown--open');

function openContent() {
    for (let button of buttons) {
        button.addEventListener('click', function () {
            button.classList.toggle('btn-dropdown--open');
            button.classList.toggle('btn-dropdown--close');
            button.innerHTML === 'Показать всё' ? button.innerHTML = 'Скрыть всё' : button.innerHTML = 'Показать всё';

            if (button.matches('.company__btn')) {
                button.previousElementSibling.classList.toggle('company__description--open');
            } if (button.matches('.section__btn-brands')) {
                button.previousElementSibling.classList.toggle('brand-list--open');
            } if (button.matches('.section__btn-technics')) {
                button.previousElementSibling.classList.toggle('technics-list--open');
            }
        });
    }
}
openContent()