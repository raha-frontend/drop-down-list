document.body.addEventListener('click', function ({ target }) {
    if (target.classList.contains('accordeon__btn')) {
        // const list = target.nextElementSibling;
        // list.classList.toggle('accordeon__list-show');

        target.classList.toggle('accordeon__btn_active');
    }
});
