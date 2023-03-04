const navHeader = document.querySelectorAll('.nav-header');

navHeader[0].addEventListener('click', function () {
    navHeader[0].classList.add('selected');

    if (navHeader[1].classList.contains('selected') || (navHeader[2].classList.contains('selected'))) {
        navHeader[1].classList.remove('selected')
        navHeader[2].classList.remove('selected')
    }
});

navHeader[1].addEventListener('click', function () {
    navHeader[1].classList.add('selected');

    if (navHeader[0].classList.contains('selected') || (navHeader[2].classList.contains('selected'))) {
        navHeader[0].classList.remove('selected')
        navHeader[2].classList.remove('selected')
    }
});

navHeader[2].addEventListener('click', function () {
    navHeader[2].classList.add('selected');

    if (navHeader[0].classList.contains('selected') || (navHeader[1].classList.contains('selected'))) {
        navHeader[0].classList.remove('selected')
        navHeader[1].classList.remove('selected')
    }
});