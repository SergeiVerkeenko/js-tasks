// 1. Реализуйте функцию, которая принимает динамичный массив и находит сумму
// всех положительных чисел. Добавить проверки

const n = +prompt('Введите колическтво элементов массива');
function doArr(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(+prompt('Добавить элемент массива'));
    }
    return arr
}
function sumArr(arr) {
    let newArr = arr.reduce((sum, el) => {
        if (el > 0) {
            return sum + el
        } else {
            return sum + 0
        }
    }, 0)
    return newArr
}
let arr = doArr(n);
console.log(sumArr(arr));