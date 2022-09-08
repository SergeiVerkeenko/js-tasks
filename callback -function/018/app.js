// 18. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимосоздать новый массив, где каждый элемент
// возведен в квадрат. map
const n = +prompt('');
const arr = [];
for (; ;) {
    let a = prompt('a');
    if (!isNaN(a)) {
        arr.push(+a);
    }
    if (arr.length === +n) break
}

let res = arr.map(function (elem) {
    return elem ** 2
});
console.log(res);