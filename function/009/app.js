// 9. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения только четных элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив с четными элементами массива
const count = +prompt();
const fillArray = (countOfArr) => {
    const filledArray = [];
    for (let i = 0; i < countOfArr; i++) {
        filledArray.push(+prompt());
    }
    return filledArray
}

const checkElements = (arrayWithError) => {
    let errors = 0;
    arrayWithError.forEach(el => isNaN(el) || !el ? errors++ : null);
    return errors > 0 ? false : true;
}


const getElemOfArr = (arrOffValue) => checkElements ? arrOffValue.filter((elem) => elem % 2 === 0) : 'Error';
const arr = fillArray(count);
console.log(getElemOfArr(arr));