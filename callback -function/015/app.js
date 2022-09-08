// 15. Пользователь вводит 6 значений и распределяет их поровну между 2 массивами.
// Cоздать новый массив, добавить туда значения всех массивов. Spread, rest
const n = 6;
const arr_1 = [];
const arr_2 = [];
for (; ;) {
    let a = prompt('');
    if (arr_1.length < 3) {
        arr_1.push(a);
    } else {
        arr_2.push(a);
    }
    if (arr_1.length + arr_2.length === 6) break
}
const arr_3 = [...arr_1, ...arr_2];
console.log(arr_3);


