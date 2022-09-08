// 12. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из отфильтрованных
// значений, где строка начинается на [a, h]. Проверка на ввод только текстовых
// значений на заполнение массива. filter
// [“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”]

const n = +prompt('n');
const arr = [];
for (; ;) {
    let str = prompt('');
    if (isNaN(str)) {
        arr.push(str)
    }
    if (arr.length === +n) break
}
let result = arr.filter(function (elem) {
    if (elem[0] == 'a' || elem[0] == 'h') {
        return true;
    }
})
console.log(result);