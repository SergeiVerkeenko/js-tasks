// 9. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
// ввод только чисел. Использовать forEach, reduce
const n = prompt('');
const arr = [];
for (; ;) {
    let a = prompt('');
    if (!isNaN(a)) {
        arr.push(+a);
    }
    if (arr.length === +n) break
}
let sum = 0;
arr.forEach(element => {
    sum += element
});
console.log(sum);

let res = arr.reduce(function (sum, elem) {
    return sum + elem
}, 0)
console.log(res);