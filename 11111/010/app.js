// function f() {
//     let res = 0;
//     return function () {
//         res += 1
//         return res;
//     }
// }
// let func =f();
// console.log(func());
// console.log(func());
// console.log(func());
// function fact(n) {
//     if (n <= 1) return 1
//     return n * fact(n - 1)
// }
// console.log(fact(5));
// throw

// const str = '<!-- lsdfjlksdja  -->';
// function checkStr(str) {
//     let a = str.replace(/^\<\!\-\-/g, '')
//     return a.replace(/\-\-\>$/g, '')
// }
// console.log(checkStr(str));

// Напишите функцию, принимающую в качестве параметра статичный объект.
//  Функция возвращает количество пар ключ / значение этого объекта. Использовать IIFE

const obj = {
    1: 123,
    2: 'asdf',
    3: '213',
    4: ''
};
(function () {
    let arr = Object.entries(obj)
    console.log(arr.length);
})()