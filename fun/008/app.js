// 3. На входе динамичный массив; число n с клавиатуры. Необходимо написать
// функцию, возвращающую элементы массива, которые больше указанного числа.
// [1, 9, 45, 11, 10], 10 -> 45, 11

const arr = [1, 9, 45, 11, 10];
const n = +prompt('');
const retArr = (arr) => {
    const newArr = [];
    arr.forEach(el => {
        if (el > n) {
            newArr.push(el)
        }
    });
    return newArr
}
console.log(retArr(arr));