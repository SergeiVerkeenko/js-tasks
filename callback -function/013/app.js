// 13. На входе n – количество элементов массива. Далее производится заполнение
// массива arr с клавиатуры. Также в памяти есть статичный массив данных
// [“javascript”, “c#”, “c”, “java”]. Необходимо создать новый массив из отфильтрованных
// значений, где строка массива arr включают значения статичного массива.
// Проверка на ввод только текстовых значений на заполнение массива. forEach

const n = prompt('enter N');
const arr = [];
const arr_1 = ['javascript', 'c#', 'c', 'java'];
const arr_2 = [];
for (; ;) {
    let a = prompt('enter elem arr');
    arr.push(a);
    if (+n === arr.length) break
}
arr.forEach(element => {
    if (arr_1.includes(element)) {
        arr_2.push(element)
    }
});
console.log(arr_2);