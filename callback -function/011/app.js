
// 11. На входе n – количество элементов массива. 
// Далее производится заполнение
// массива с клавиатуры. Выведите произведение
//  всех элементов массива.
// Проверки на ввод только чисел. Использовать 
// forEach, reduce
let n = +prompt('n');
const arr = [];
for (; ;) {
    let num = prompt('num');
    if (!isNaN(num)) {
        arr.push(+num)
    }
    if (arr.length === n) break
}
const result = arr.reduce(function (proizv, elem) {
    return proizv * elem
}, 1)
console.log(result);

let a = 1;
arr.forEach(element => {

    a *= element
});
console.log(a);