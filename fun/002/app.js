// 2. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Напишите функцию, которая принимает массив строк и
// находим там наибольшее по длине текстовое значение. Добавить проверки
let n = 6;
const pushInput = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(prompt('enter value'))
    }
    return arr
}

const checkValue = (arr) => {
    const error = arr.filter((el) => isNaN(el))
    return error.length === arr.length ? true : false
}
const findValue = (arr) => {
    if (checkValue(arr)) {
        let total = arr[0];
        arr.forEach(el => el.length > total.length ? total = el : null)
        return total
    } else {
        return 'ERROR'
    }
}
const data = pushInput(3)
console.log(findValue(data));