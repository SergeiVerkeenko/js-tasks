// 7. Дан массив с элементами [1, 2, 3, 4, 5]. 
// С помощью цикла for of найдите сумму
// элементов этого массива

let value = 5;
const a = [];
for (let i = 0; i < value; i++) {
    let pr = +prompt('');
    a.push(pr);
}
console.log(a);

let res = 0;
for (const b of a) {
    res += +b
}
console.log(res);