// 8. На входе статичный объект. 
// Необходимо посчитать количество пар (ключ:
// значение)
const obj = {
    a: 1,
    b: 4,
    c: 2,
    d: 5
}
let a = 0;
for (const key in obj) {
    if (!obj[key]) {
        a += 1
    }
}
console.log(a);