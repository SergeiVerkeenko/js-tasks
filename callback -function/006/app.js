// 6. На входе n – количество элементов массива.
//  Далее производится заполнение
// массива с клавиатуры. Необходимо вывести true, 
// если хотя бы 1 элемент массива –
// число. Some, forEach

let n = prompt('');
const arr = [];
for (let i = 0; i < n; i++) {
    arr.push(+prompt('производится заполнение массива'));
}
let check = arr.some(elem => {
    if (Number.isInteger(elem)) {
        return true;
    }
});
console.log(check);
let a = 0;
arr.forEach(element => {
    if (!isNaN(element)) {
        a += 1
    }
}
);
console.log((a !== 0) ? true : false);

