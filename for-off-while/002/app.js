// 2. [1, 2, 3, 4, 5]. Выведите каждый элемент массива 3 любыми циклами
let a = [1, 2, 3, 4, 5];
let i = 0;
while (i < a.length) {
    console.log(a[i]);
    i++
}
let i = 0;
do {
    console.log(a[i]);
    i++
} while (i < a.length);

for (const i of a) {
    console.log(i);
}