// 2. *Вычислите сумму массива целых чисел статичного массива используя рекурсию
const arr = [1, 23, 4, 5, 5, 6, 7, 8, 9];

function sumArr(arr, sum) {
    sum = sum || 0
    if (arr.length) {
        return sumArr(arr, sum + arr.pop())
    } else {
        return sum
    }
}
console.log(sumArr(arr));
