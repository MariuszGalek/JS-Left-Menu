const menu = document.querySelector('nav');
const button = document.querySelector('.burger');
const close = document.querySelector('.fa-times')
const expand = document.querySelector('.fa-bars')

button.addEventListener('click', function(){
    menu.classList.toggle('active');
    button.classList.toggle('active');
    if (button.classList.contains('active')) {
        expand.classList.add('hide');
        close.classList.remove('hide');
    } else {
        close.classList.add('hide');
        expand.classList.remove('hide');
    };
});