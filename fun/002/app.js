// 2. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Напишите функцию, которая принимает массив строк и
// находим там наибольшее по длине текстовое значение. Добавить проверки
let n = 6;
function checkLenght(x) {
    let res = '';
    if()
    x.forEach(element => {
        if (element.length > res.length) {
            res = element
        }
    });
    return res
}

const checkValue = (arr) => {
    const error = arr.filter((el) => isNaN(el))
    return error.length === arr.length ? true : false
}

console.log(checkLenght);
