// 3. На входе статичный объект. 
// Необходимо вывести все числовые значения.
const obj = { a: 1, 10: 'as', c: 2, 3: 'asdd' }
for (const elem in object) {
    if (!isNaN(obj[elem])) {
        console.log(obj[elem]);
    }
}