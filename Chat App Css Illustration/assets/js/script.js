const menu = document.querySelector('#menu');
const addmenu = document.querySelector('#open');

menu.addEventListener('click', function(){
    if(menu.classList.contains('open')){
        addmenu.classList.remove('open');
    }
    else {
        addmenu.classList.add('open');
    }
})