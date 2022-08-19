/*---------- TOGGLE -----------*/

let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function () {
    body.classList.toggle('open');
})






/* ----- SCROLL CHANGEMENT COULEUR ----*/

const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 500) {
        header.classList.add('scroll');
    }
    else {
        header.classList.remove('scroll');
    }
})