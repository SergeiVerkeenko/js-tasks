// 2. На входе статичный объект. Необходимо вывести все числовые ключи.

const obj = { a: 1, 10: 'as', c: 2, 3: 'asdd' }
for (const elem in object) {
    if (!isNaN(elem)) {
        console.log(elem);
    }
}