// 20.На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Оставьте в нем только положительные числа. Filter
const n = +prompt('n');
const arr = [];
for (; ;) {
    let a = prompt('a');
    if (!isNaN(a)) {
        arr.push(+a)
    }
    if (arr.length === n) break
}
let res = arr.filter(function (elem) {
    if (elem > 0) {
        return true
    }
})
console.log(res);