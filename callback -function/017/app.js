// 17. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Значения могут быть строкового либо числового типа
// данных. Необходимо из этих элементов составить 2 массива: со строками и
// второй массив, соответственно, с числами. forEach

const n = +prompt('N');
const arr_1 = [];
const arr_1_1 = [];
const arr_1_2 = [];
for (; ;) {
    let a = prompt('');
    arr_1.push(a);
    if (arr_1.length === +n) break
}
arr_1.forEach(element => {
    if (isNaN(element)) {
        arr_1_1.push(element)
    } else {
        arr_1_2.push(element)
    }
});
console.log(arr_1_1);
console.log(arr_1_2);