// 3. Дан массив чисел внутри строки. Необходимо строку преобразовать в массив
// используя JSON.parse. Если же после того как вы спарсили данные у вас не
// массив, то бросить исключение. Добавить проверку на числа. Далее вывести
// только те числа, которые кратны 3

// const json = `[
//     { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
//     { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
//     { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
//     { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
//     { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
// ]`;
// let parsedData = JSON.parse(json);
// function checkNum(arr) {
//     let countError = 0;
//     arr.forEach(el => isNaN(el.priority) ? countError++ : null)
//     if (countError > 0) throw new Error('Znach')
//     return true
// }
// function findPriority(arr) {
//     try {
//         if (checkNum(arr)) {
//             const newArr = arr.filter(el => el.priority % 3 === 0)
//             if (!newArr.length) throw new Error('Znach')
//             return newArr
//         }
//     } catch (error) {
//         return error.message
//     }
// }
// console.log(findPriority(parsedData));

// 4. Дана строка массива. Необходимо спарсить строку и преобразовать в массив.
// Если же после того как вы спарсили данные у вас не массив, то бросить
// исключение. Далее вывестите элементы массива,в котрых id – четное
// значение

// const json = `[
//     { "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
//     { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
//     { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
//     { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
//     { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3 }
// ]`;
// let parsedData = JSON.parse(json);

// function checkArr(arr) {
//     if (!Array.isArray(arr)) throw new Error(' ne arr')
//     if (arr.some(el => isNaN(el.id))) throw new Error('est string')
//     return true
// }
// function findValue(arr) {
//     try {
//         if (checkArr(arr)) {
//             const newArr = arr.filter(el => el.id % 2 === 0)
//             if (!newArr.length) throw new Error('net id%2==0')
//             return newArr
//         }
//     } catch (error) {
//         return error.message
//     }
// }
// console.log(findValue(parsedData));


// На вход подается число n – количество элементов массива. 
// Необходимо заполнить массив случайными элементами. 
// Если значение массива находится в диапазоне 10<n< 100, 
// то занести в новый массив. Добавить проверки и обработать их.
//  Обратите внимание, тут как минимум 3 функции. 
//  Первая: формирование массива. Вторая: валидация. 
//  Третья: основная логика задачи

// const n = +prompt('N');
// function doArr(n) {
//     const arr = [];
//     for (let i = 0; i < n; i++) {
//         arr.push((Math.floor(Math.random() * 100) + 1));
//     }
//     return arr
// }
// function checkArr(arr) {
//     if (!Array.isArray(arr)) throw new Error('')
//     if (arr.some(el => isNaN(el))) throw new Error('')
//     if (arr.some(el => el < 0)) throw new Error('')
//     return true
// }

// function doNewArr(arr) {
//     try {
//         if (checkArr(arr)) {
//             const newArr = arr.filter(el => el >= 10 && el <= 100);
//             if (!newArr.length) throw new Error('')
//             return newArr
//         }
//     } catch (error) {
//         return error.message
//     }
// }
// const randomArr = doArr(n);
// console.log(doNewArr(randomArr));

// 6. Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать true, если можно построить треугольник со
// сторонами заданной длины, и false в любом другом случае. Треугольник
// существует только тогда, когда сумма двух его сторон больше третьей. Требуется
// сравнить каждую сторону с суммой двух других. Если хотя бы в одном случае
// сторона окажется больше либо равна сумме двух других, то треугольника с
// такими сторонами не существует.

const a = +prompt('');
const b = +prompt('');
const c = +prompt('');
function checkNum(a, b, c) {
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {

    }
}
function doData(a, b, c) {
    try {
        if (!(a + b > c || a + c > b || b + c > a)) {
            throw new Error('')
        } else return true
    } catch (error) {
        return error.message
    }
}
console.log(doData(a, b, c));