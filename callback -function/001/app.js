// 1. На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполяет массив. Далее необходимо создать массив только из чисел. Если длина
// массива равна 0, то вывести ‘Массив пуст’. filter

const arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(prompt(''))
}

let res = arr.filter(function (elem) {
    if (!isNaN(elem)) {
        return true;
    }
})
console.log(res.length === 0 ? 'Массив пуст' : res);
