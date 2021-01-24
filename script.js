var accordeon = document.querySelector('.accordeon');

accordeon.addEventListener('click', function (event) {
    var element = event.target;

    if (element.classList.contains('accordeon__btn')) {
        var accordeon__btn = element.nextElementSibling;

        accordeon__btn.classList.toggle('accordeon__list-show');
    }
});