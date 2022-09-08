// 8. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
// true, в противном случае false. Every, forEach
let n = prompt('');
const arr = [];
for (let i = 0; i < n; i++) {
    arr.push(+prompt('производится заполнение массива'));
}
let a = 0;
arr.forEach(element => {
    if (!isNaN(element)) {
        a += 1
    }
}
);
console.log((a === +n) ? true : false);

let result = arr.every(function(elem){
    if (!isNaN(elem)) {
        return true;
    } else {
        return false;
    }
})
console.log(result);