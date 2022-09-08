// 14. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из элементов, каждое
// значение которого имеет вид #name
// [“hschool”, “company”] -> [“#hschool”, “#company”]

const n = prompt('N');
const arr = [];
for (; ;) {
    let a = prompt('');
    arr.push(`#${a}`);
    if (arr.length === +n) break
}
console.log(arr);