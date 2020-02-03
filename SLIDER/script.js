'use strict'

// поключаем шрифт
document.head.insertAdjacentHTML("afterbegin", '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">');
document.head.insertAdjacentHTML("afterbegin", '<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">');
let slider = document.querySelector('.slider')

//Создаем иконку загрузки
let loadIcon = document.createElement('i');
loadIcon.classList.add('fa', 'fa-cog', 'fa-spin', 'fa-5x', 'fa-spin');
slider.insertAdjacentElement("afterbegin", loadIcon);

// Создаем левую стрелку
let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
slider.insertAdjacentElement("beforeend", leftArrow);

// Создаем правую стрелку
let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
slider.insertAdjacentElement("beforeend", rightArrow);

window.addEventListener('load', () => {
    
    loadIcon.style.display ='none';
    
    if (document.querySelectorAll('.slider-img').length > 1) {
        
        leftArrow.addEventListener('click', () => {
            images.leftShiftSlide();
        });
    
        rightArrow.addEventListener('click', () => {
            images.rightFolowSlide();
        });

        images.init();


         // динамичный цвет надписи
         
    }
})


const images = {
    slides: [],
    indexCurrentSlide: 4,
    currentSlide: '',
    leftSlide: '',
    rightSlide: '',
    timerId: {},

    init() {
        // получаем слайды из html и помещаем их в массив 
        this.slides = Array.prototype.slice.call(document.querySelectorAll('.slider-item'));
        // рендерим пагинацию
        this.renderPagination();
        // запускаем автосдвиг
        this.avtoShift(4000);
        // включаем динамический цвет надписи
        this.titelTextColorDinamic();
    },

    //функция подготовки сдвига влево
    leftShiftSlide() {
        // Запретить событие click и остановить слайдер
        leftArrow.classList.add('action-stop');
        rightArrow.classList.add('action-stop');
        clearInterval(this.timerId);
        
        // получаем нужные элементы
        this.currentSlide = this.slides.pop();
        this.leftSlide = this.slides.pop();
        
        //ставим элемент слева
        this.leftSlide.classList.add('left-start-position');
        this.leftSlide.style.zIndex = '10';
        
        //сдвигаем слайды влево
        this.shiftSlide(this.leftSlide, this.currentSlide, 'left');
        
        //очищаем классы выставляя z-index для нужных элементов
        this.currentSlide.addEventListener('transitionend', () => {
            this.clearClassSlides();
        });

        //помещаем элементы в нужной последовательности в массив
        this.slides.unshift(this.currentSlide);
        this.slides.push(this.leftSlide);

        // выставляем индекс текущего слайда для пагинации
        if (this.indexCurrentSlide == 0) {
            this.indexCurrentSlide = 4;
        } else {
            this.indexCurrentSlide -= 1;
        }
        // рендерим пагинацию
        this.renderPagination();

        // запускаем автопоказ сладера
        this.avtoShift(4000);
    },

    // функция подготовки сдвига вправо
    rightFolowSlide() {
        // Аналогично делаем анимацию вправо
        leftArrow.classList.add('action-stop');
        rightArrow.classList.add('action-stop');
        clearInterval(this.timerId);

        this.currentSlide = this.slides.pop();
        this.rightSlide = this.slides.shift();

        this.rightSlide.classList.add('right-start-position');
        this.rightSlide.style.zIndex = '10';

        this.shiftSlide(this.rightSlide, this.currentSlide, 'right');

        this.currentSlide.addEventListener('transitionend', () => {
            this.clearClassSlides();
        });

        this.slides.push(this.currentSlide);
        this.slides.push(this.rightSlide);

        if (this.indexCurrentSlide == 4) {
            this.indexCurrentSlide = 0;
        } else {
            this.indexCurrentSlide += 1;
        }
        this.renderPagination();
        this.avtoShift(4000);
    },

    // функция сдвига слайдев влево или в право с использованием функции
    // для обхода оптимизации браузера который не даёт менять по очереди значение
    // с 0 до 100 выставляя сразу 100 элементу
    shiftSlide(firstSlide, secondSlide, arrow) {
        this.raf(() => {
            firstSlide.classList.add('current-slide-animation');
            if (arrow == 'left') {
                secondSlide.classList.add('left-slide-animation');
            } else {
                secondSlide.classList.add('right-slide-animation');
            };
        }); 
    },

    //очищаем классы у слайдов оставляя текущему слайду z-index для показа
    clearClassSlides() {
        this.slides.forEach(element => {
            if (element.classList.contains('left-start-position')) {
                element.style.zIndex = '10';
                element.classList.remove('left-start-position');
            };

            if (element.classList.contains('right-start-position')) {
                element.style.zIndex = '10';
                element.classList.remove('right-start-position');
            };

            if (element.classList.contains('left-slide-animation')) {
                element.style.zIndex = '-1';
                element.classList.remove('left-slide-animation');
            };

            if (element.classList.contains('right-slide-animation')) {
                element.style.zIndex = '-1';
                element.classList.remove('right-slide-animation');
            };

            if (element.classList.contains('current-slide-animation')) {
                element.classList.remove('current-slide-animation');
            };

            if (leftArrow.classList.contains('action-stop')) {
                leftArrow.classList.remove('action-stop');
            };
            
            if (rightArrow.classList.contains('action-stop')) {
                rightArrow.classList.remove('action-stop');
            };
        });
    },

    // функция рендер пагинации
    renderPagination() {
        //Очищаем погинацию
        let clearPaginationElements = document.querySelectorAll('.pagination-item');
        clearPaginationElements.forEach(element => {
            element.parentNode.removeChild(element);
        });

        // рисуем с учетом позиции слайда
        for (let n = 0; n <= this.slides.length-1; n++) {
            let circle = document.createElement('i');
            if (n == this.indexCurrentSlide) {
                circle.classList.add('fa', 'fa-circle', 'pagination-item');
            } else {
                circle.classList.add('fa', 'fa-circle-o', 'pagination-item');
            };
            pagination.insertAdjacentElement("beforeend", circle);
        };   
    },

    // автосдвиг слайдера по выставленному интервалу
    avtoShift(interval) {
        this.timerId = setInterval(() => {
            images.rightFolowSlide();
         }, interval);
    },

    // Рандом цвета для надписи
    setColorTitelSlider() {
        let colorList = ['rgb(87, 146, 197)', 
                        'rgb(197, 87, 182)', 
                        'rgb(87, 197, 164)', 
                        'rgb(240, 226, 107)',
                        'rgb(240, 107, 107)'];
        return colorList[Math.floor(Math.random() * 4)];
    },

    titelTextColorDinamic() {
        setInterval(() => {
            document.querySelector('.text').style.color = images.setColorTitelSlider();
         }, 100);
    },

    // функция обхода оптимизации браузера
    raf(fn){
        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                fn();
            });
        });
    }
}






