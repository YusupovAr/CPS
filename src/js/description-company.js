const openDescription = document.querySelector('.company__btn')
const textDescription = document.querySelector('.company__description')

function dropdownBrand(btn, description) {
    if (btn.innerHTML === 'Показать всё') {
        description.classList.toggle('company__description--open');
        btn.classList.remove('btn-dropdown--open');
        btn.classList.add('btn-dropdown--close');
    } else {
        description.classList.toggle('company__description--open');
        btn.classList.add('btn-dropdown--open');
        btn.classList.remove('btn-dropdown--close');
    }
};

openDescription.addEventListener('click', function() {
    dropdownBrand(openDescription, textDescription)
    openDescription.innerHTML = (openDescription.innerHTML === 'Показать всё') ? openDescription.innerHTML = 'Скрыть всё' : openDescription.innerHTML = 'Показать всё';
});