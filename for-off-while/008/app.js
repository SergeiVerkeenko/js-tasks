// 8. Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. 
// Выведите каждый элемент массива
// без повторений -> [1, 2, 3, 4, 5] (for, for of)

const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];
let a = [];
for (let i = 0; i < arr.length; i++) {
    if (a.includes(arr[i])) {
        continue
    } else {
        a.push(arr[i])
    }
}
console.log(a);

const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];
let a = [];
for (const item of arr) {
    if (!a.includes(item)) {
        a.push(item)
    }
}