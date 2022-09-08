// 5. На входе статичный объект. 
// Необходимо сформировать массив из всех нечетных
// значений объекта.
const obj = {
    a: 1,
    b: 2,
}
const arr = [];
for (const elem in obj) {
    if (obj[elem] % 2 === 1) {
        arr.push(obj[elem])
    }
}
console.log(arr);