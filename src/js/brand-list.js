const openBrands = document.querySelector('.section__btn-brands')
const brandList = document.querySelector('.section__brand')

function dropdownBrand(btn, list) {
    if (btn.innerHTML === 'Показать всё') {
        list.classList.toggle('brand-list--open');
        btn.classList.remove('btn-dropdown--open');
        btn.classList.add('btn-dropdown--close');
    } else {
        list.classList.toggle('brand-list--open');
        btn.classList.add('btn-dropdown--open');
        btn.classList.remove('btn-dropdown--close');
    }
};

openBrands.addEventListener('click', function() {
    dropdownBrand(openBrands, brandList)
    openBrands.innerHTML = (openBrands.innerHTML === 'Показать всё') ? openBrands.innerHTML = 'Скрыть всё' : openBrands.innerHTML = 'Показать всё';
});