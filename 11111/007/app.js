// 1. На входе значение. Необходимо его обработать. Если это число и оно не является
// четным, бросить исключение

const num = prompt('enter num');

const doData = (num) => {
    try {
        if (!isNaN(num) || num % 2 == 1) throw new Error('Не четное и строка. Вводи норм')
        return num
    } catch (error) {
        return error.message
    }

}
console.log(doData(num));