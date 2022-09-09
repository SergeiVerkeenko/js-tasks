// 4. На входе массив. Необходимо создать функцию проверки на то что в 
// массиве
// только числа. Функция возвращает true, если в массиве только числа и 
// false в
// противном случае
const arr = [1, 2, 3, 4, 5, 6,];
function checkArr(newArr) {
    let res = newArr.filter(el => !isNaN(el))
    return newArr.length === res.length ? true : false;
}
console.log(checkArr(arr));