
// 3. Дан массив с элементами [2, 3, 4, 5]. 
// С помощью 3 циклов найдите произведение
// элементов этого массива.

const arr = [2, 3, 4, 5];
let i = 0;
let res = 1;
while (i < arr.length) {
    res *= arr[i];
    i++
}
console.log(res);
for (let i of arr) {
    res *= i
}
console.log(res);

for (let i = 0; i < a.length; i++) {
    res *= a[i];
}
console.log(res);