// 13. Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в
// противном случае false
// anna -> true
// мем -> true
// тест -> false

let a = 'anlna';
(a.split('').join('') == a.split('').reverse().join('')) ? console.log(true) : console.log(false);    
