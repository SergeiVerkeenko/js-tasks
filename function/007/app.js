// 7. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только строки. Вторая для получения суммы всех строчных элементов массива.
// Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую конкатенацию всех строчных элементов массива
const count = +prompt()

const fillArray = (countOfArr) => {
    const filledArray = [];
    for (let i = 0; i < countOfArr; i++) {
        filledArray.push(prompt())
    }
    return filledArray
}
const checkElements = (arrayWithError) => {
    let errors = 0
    arrayWithError.forEach(el => !isNaN(el) ? errors++ : null)
    return errors > 0 ? false : true
}
const getSumElemOfArr = (arrOfValues) => checkElements(arrOfValues) ? arrOfValues.reduce((sumMiddle, el) => sumMiddle + el, 0) : 'Error'

const arr = fillArray(count);
console.log(getSumElemOfArr(arr));


// const fillArray = (countOfArr) => {
//     const filledArray = []
//     for (let i = 0; i < countOfArr; i++) {
//         filledArray.push(prompt())
//     }
//     return filledArray
// }