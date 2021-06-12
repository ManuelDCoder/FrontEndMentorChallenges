const hamburger = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('#mobile-menu')

hamburger.addEventListener('click', function(){
    if(hamburger.classList.contains('open', 'menu')){
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('menu')
    }
    else {
        hamburger.classList.add('open')
        mobileMenu.classList.add('menu')
    }
});