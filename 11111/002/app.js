// 2. Реализуйте функцию searchBinary, которая принимает 2 параметра: значение и
// массив. Функция возвращает индекс, где значение встречается в массиве, если
// найдено. Если значение не найдено, возвращается сообщение об ошибке

function searchBinary(value, arr) {
    let start = 0;
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2);
    for (let i = 0; i < arr.length; i++) {
        if (arr[middle] == value) {
            return middle
        } else {
            if (arr[middle] < value) {
                start = middle + 1;
            } else {
                end = middle - 1;
            }
            middle = Math.floor((start + end) / 2);
        }
    }
    return middle;
}
console.log(searchBinary(7, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));