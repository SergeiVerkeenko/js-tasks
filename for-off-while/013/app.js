// 13. Дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму всех положительных элементов массива циклом for of
const arr = [0, -1, 1, -3, -5, 2, 5, 6];
res = 0;
for (const i of arr) {
    if (i > 0) {
        res += i;
    }
}
console.log(res);