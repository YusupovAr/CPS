const openTechnics = document.querySelector('.section__btn-technics')
const brandList = document.querySelector('.section__technics')

function dropdownBrand(btn, list) {
    if (btn.innerHTML === 'Показать всё') {
        list.classList.toggle('technics-list--open');
        btn.classList.remove('btn-dropdown--open');
        btn.classList.add('btn-dropdown--close');
    } else {
        list.classList.toggle('technics-list--open');
        btn.classList.add('btn-dropdown--open');
        btn.classList.remove('btn-dropdown--close');
    }
};

openTechnics.addEventListener('click', function() {
    dropdownBrand(openTechnics, brandList)
    openTechnics.innerHTML = (openTechnics.innerHTML === 'Показать всё') ? openTechnics.innerHTML = 'Скрыть всё' : openTechnics.innerHTML = 'Показать всё';
});