// 8. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения массива с удоенными значенями каждого
// элемента. Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую массив с удвоенными элементами
const count = +prompt('');
const fillArray = (countOfArr) => {
    const filledArray = [];
    for (let i = 0; i < countOfArr; i++) {
        filledArray.push(+prompt());
    }
    return filledArray
}

const checkElements = (arrayWithError) => {
    let errors = 0;
    if (condition) {
        arrayWithError.forEach(element => {
            isNaN(element) || !element ? errors++ : null
        });
    }
}

const getMulElemOfArr = (arrOffValue) =>  checkElements ? arrOffValue.map((elem) => elem * 2) : 'Error';

const arr = fillArray(count);

console.log(getMulElemOfArr(arr));