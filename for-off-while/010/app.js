// 10. Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. 
// Выведите только уникальные
// значения массива -> [1, 5]
const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort();
const arr_2 = [];
for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] === arr[i + 1]) && !(arr[i] === arr[i - 1])) {
        arr_2.push(arr[i])

    }
}
console.log(arr_2);
let i = 0;
do {
    if (!(arr[i] === arr[i + 1]) && !(arr[i] === arr[i - 1])) {
        arr_2.push(arr[i])

    }
    i++
} while (i<arr.length);