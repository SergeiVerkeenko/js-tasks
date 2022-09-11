// 10. На входе число. Необходимо создать функцию, возвращающую факториал числа
// 4! = 1 * 2 * 3 * 4
const count = +prompt('');
const fillArray = (countOfArr) => {
    const filledArray = [];
    for (let i = 1; i <= countOfArr; i++) {
        filledArray.push(i);
    }
    return filledArray
}

const getFactorElem = (arrOffValue) => {
    const factorElem = arrOffValue.reduce((el, mult) => mult * el, 1);
    return factorElem
}

const arr = fillArray(count);
console.log(getFactorElem(arr));
