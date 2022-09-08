// 19. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры (хотя бы один элемент массива – 0). Необходимо вывести
// сумму всех значений массива до первого 0. Добавить проверки на ввод чисел.

const n = prompt('N');
const arr = [];
for (; ;) {
    let a = prompt('');
    if (!isNaN(a)) {
        arr.push(+a);
    }
    if (arr.length === +n) break
}
let res = 0;
for (let i = 0; i < arr.length; i++) {
    res += arr[i];
    if (arr[i] === 0) break
}
console.log(res);