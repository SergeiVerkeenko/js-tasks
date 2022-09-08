// 12. На входе пустой объект, массив, 
// n – количество элементов массива. Далее
// производится заполнение массива с клавиатуры. 
// Добавить в объект ключ “sum”,
// значение – сумма элементов массива(reduce). 
// Добавить проверки на ввод чисел

const obj = {};
const arr = [];
const n = +prompt('N');
for (; ;) {
    let input = +prompt('');
    if (isNaN(input)) {
        arr.push(+input)
    }
    if (n = arr.length) break
}
obj.sum = arr.reduce((sum, elem) => sum + elem, 0);