'use strict';
// Задание №2 
// С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно
for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(`${i} это ноль`)
    }
    else if (i % 2 == 0) {
        console.log(`${i} это чётное число`)
    }
    else {
        console.log(`${i} это не чётное число`)
    }
}


// Задание №3
// Выведите в консоль значения, указанные рядом с комментариями
const post = {
    author: "John", //вывести этот текст
    postId: 23
    , comments: [
        {
            userId: 10
            , userName: "Alex"
            , text: "lorem ipsum"
            , rating: {
                likes: 10
                , dislikes: 2 //вывести это число
            }
}
        , {
            userId: 5, //вывести это число
            userName: "Jane"
            , text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3
                , dislikes: 1
            }
}
, ]
}
console.log(`author - ${post.author}`) 
console.log(`dislikes - ${post.comments[0].rating.dislikes}`) 
console.log(`userId - ${post.comments[1].userId}`)
console.log(`text - ${post.comments[1].text}`)


// Задание №4
// Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
// 15%

const products = [
    {
        id: 3
        , price: 200
, }
    , {
        id: 4
        , price: 900
, }
    , {
        id: 1
        , price: 1000
, }
, ];

products.forEach(element => element.price *= 1-0.15);
console.log(products);


// Задание №5
//Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
//1. Получить все товары, у которых есть фотографии
//2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort

const products_2 = [
    {
        id: 3
        , price: 127
        , photos: [
"1.jpg"
, "2.jpg"
, ]
}
    , {
        id: 5
        , price: 499
        , photos: []
}
    , {
        id: 10
        , price: 26
        , photos: [
"3.jpg"
]
}
    , {
        id: 8
        , price: 78
, }
, ];


let result = products_2.filter(word => word.photos && word.photos.length>0);
console.log(result)

products_2.sort(function(a,b){
    return a.price - b.price
})
console.log(products_2)


// Задание №6
// Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла
for(let i = 0; i <=9; console.log(i++)){}


// Задание №7
// Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
//только у вашей горки должно быть 20 рядов, а не 5
for(let i = 0; i <= 20; i++){
    console.log('x'.repeat(i))
}