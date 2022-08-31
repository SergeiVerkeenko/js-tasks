// 9. Дан массив 2, 5, 9, 15, 0, 4. 
// Выведите все числа кратные 3 циклом for of
const arr = [2, 5, 9, 15, 0, 4];
const arr_2 = [];
for (const i of arr) {
    if (i % 3 === 0) {
        arr_2.push(i);
    }
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        arr_2.push(arr[i])
    }
}
console.log(arr_2);