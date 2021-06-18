const hamburger = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('#mobile-menu');
const subMenu = document.querySelector('#sub-menu');
const subMenu2 = document.querySelector('#sub-menu2');
const subMenu3 = document.querySelector('#sub-menu3');
const display = document.querySelector('#display')
const display2 = document.querySelector('#display2')
const display3 = document.querySelector('#display3')

hamburger.addEventListener('click', function(){
    if(hamburger.classList.contains('open', 'menu')){
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('menu');
        // subMenu.classList.remove('addsub');
    }
    else {
        hamburger.classList.add('open');
        mobileMenu.classList.add('menu');
        // subMenu.classList.add('addsub');

    }
});

subMenu.addEventListener('click', function(){
    if (display.classList.contains('addsub')){
        display.classList.remove('addsub');
        display.classList.add('fade-out');
        display.classList.remove('fade-in');

    }
    else {
        display.classList.add('addsub')
        display.classList.remove('fade-out')
        display.classList.add('fade-in')

    }

    subMenu2.querySelector('noscript')
    subMenu3.remove
});

subMenu2.addEventListener('click', function(){
    if (display2.classList.contains('addsub')){
        display2.classList.remove('addsub');
        display2.classList.add('fade-out');
        display2.classList.remove('fade-in');
    }
    else {
        display2.classList.add('addsub')
        display2.classList.remove('fade-out')
        display2.classList.add('fade-in')

    }
});

subMenu3.addEventListener('click', function(){
    if (display3.classList.contains('addsub')){
        display3.classList.remove('addsub');
        display3.classList.add('fade-out');
        display3.classList.remove('fade-in');
    }
    else {
        display3.classList.add('addsub')
        display3.classList.remove('fade-out')
        display3.classList.add('fade-in')

    }
});