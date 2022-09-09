// 5. На входе n – количество элементов массива.Далее производится
// заполнение
// массива с клавиатуры.Реализуйте 2 функции.Первая для формирования
// массива.Вторая для нахождения количества элементов массива

const n = +prompt('Enter N elem');


function foundCountElems(newArr) {
    return newArr.length;
}
function doArr(value) {
    let arr = [];
    for (let i = 0; i < value; i++) {
        arr.push(+prompt('Enter elem'))
    }
    let count = foundCountElems(arr);
    return count;
}
console.log(doArr(n));