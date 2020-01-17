'use strict';

// Задание №1 
// Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
//- единицы (в свойстве units)
//- десятки (в свойстве tens)
//- сотни (в свойстве hundereds)
// Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
// необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект

function Obj(units, tens, hundereds) {
    this.units = units,
    this.tens = tens,
    this.hundereds = hundereds
}; 

function convert(num) {
    if (num >=0 && num <1000){
        if (num<10){
            return new Obj(num, 0, 0);
        } else if (num>9 && num<100){
            return new Obj(Math.floor(num%10), Math.floor(num/10), 0);
        } else {
            return new Obj(Math.floor(num%10), Math.floor(num%100/10), Math.floor(num/100));
        }
    }else {
        console.log('Неверное значение!');
        let obj_1 = new Obj(); // или  let obj_1 = new Obj(0,0,0); точно 
    }
};


let answer; 
answer = +prompt('Введите число от 0 до тысячи');
const obj_1 = convert(answer);    
console.log(obj_1);


// Задание № 2
// Для игры бродилка, добавить возможность ходить по диагонали цифрами 1, 3, 7, 9.
// Также необходимо сделать так, чтобы пользователь не мог совершить шаг в стенку, т.е. при направлении в стенку и игрок оставался // на том же месте где стоял.

//модификация файла mover.js для того что бы исключить ухода за стенку и ходить по диагонале
// протестировал работает приложил файл модифицированный можно его просто заменить в папке с игрой для проверки
switch (direction) {
            case 2:
				if (nextPosition.y == 9) {
					alert('Вы уперлись в стенку!');
					break;
				} else {
					nextPosition.y++;
					break;
				}
            case 4:
				if (nextPosition.x == 0) {
					alert('Вы уперлись в стенку!');
					break;
				} else {
                nextPosition.x--;
                break;
				}
            case 6:
				if (nextPosition.x == 9) {
					alert('Вы уперлись в стенку!');
					break;
				} else {
                nextPosition.x++;
                break;
				}
            case 8:
				if (nextPosition.y == 0) {
					alert('Вы уперлись в стенку!');
					break;
				} else {
                nextPosition.y--;
                break;
				}
			case 1:
				if (nextPosition.x == 0 || nextPosition.y == 9) {
					alert('Вы уперлись в стенку!');
					break;
				} else {
					nextPosition.y++;
					nextPosition.x--;
					break;
				}
            case 3:
				if (nextPosition.x == 9 || nextPosition.y == 9) {
					alert('Вы уперлись в стенку!');
					break;
				} else {
					nextPosition.y++;
					nextPosition.x++;
                break;
				}
            case 7:
				if (nextPosition.x == 0 || nextPosition.y == 0) {
					alert('Вы уперлись в стенку!');
					break;
				} else {
                nextPosition.x--;
				nextPosition.y--;
                break;
				}
            case 9:
				if (nextPosition.x == 9 || nextPosition.y == 0) {
					alert('Вы уперлись в стенку!');
					break;
				} else {
				nextPosition.x++;
                nextPosition.y--;
                break;
				}
        }

// Задание № 3 
// Просто не хватило времени реализовать хотя понимание логики есть. Реализую чуть позже для себя проверить силы! 
//