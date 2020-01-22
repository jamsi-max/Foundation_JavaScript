'use strict';

const button = document.querySelectorAll('button')
button.forEach(function(element) {
    element.addEventListener('click', function(event){
        if (event.target.innerText == 'Подробнее'){
            event.target.innerText = 'Отмена';
            event.target.parentNode.querySelector('img').classList.add('noActive');
            event.target.parentNode.querySelector('span').classList.add('active');
        } else if (event.target.innerText == 'Отмена'){
            event.target.innerText = 'Подробнее';
            event.target.parentNode.querySelector('img').classList.remove('noActive');
            event.target.parentNode.querySelector('span').classList.remove('active');
        }
    })
})

