// 4. Напишите функцию, которая принимает массив чисел и находит минимальное и
// максимальное числа соответственно. Добавить проверки на ввод и если
// значения массива не соответствуют условию задания, вывести сообщение об
// ошибке

let n = +prompt('');


function getResult(arr) {
    if (checkArray(arr)) {
        return `max ${Math.max(...arr)}, min ${Math.min(...arr)}`
    } else {
        return 'error'
    }

}

function checkArray(newArr) {
    let res = newArr.filter(el => !isNaN(el))
    return newArr.length === res.length ? true : false
}

function doArr(array) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(prompt(''))
    }
    return arr
}
const arr = doArr(n)

console.log(getResult(arr));


