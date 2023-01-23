// 1. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10
// interface Obj {
//     id: number;
//     title: string;
//     count: number;
//     price: number
// }
// const array: Obj[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]
// function filter(array: Obj []): Obj[] {
//     const filtered = array.filter((elem) => elem.count > 10)
//     // console.log(filtered);
//     return filtered
// }
// console.log(filter(array))
// 2. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары в обратном порядке
// interface Obj {
//     id: number;
//     title: string;
//     count: number;
//     price: number
// }
// const array: Obj[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]
// const reverse = (array: Obj[]): Obj[] => {
//     const result = array.reverse();
//     return result
// };
// const result = reverse(array);
// console.log(result);
// 3. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести только те товары, положение которых внутри массива кратно 3
// interface Product {
//     id: number;
//     title: string;
//     count: number;
//     price: number
// }
// const array: Product[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]
// function filter(array: Product[]): Product[] {
//     const filtered = array.filter((el) => el.count % 3 === 0)
//     return filtered
// }
// console.log(filter(array));
// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести итоговую стоимость на складе.
// Итоговая стоимость = количество * цена +
// interface Product {
//     id: number;
//     title: string;
//     count: number;
//     price: number
// }
// const array: Product[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]
// function result(array: Product[]): number {
//     const result = array.reduce((sum, elem) => sum + elem.count * elem.price, 0)
//     return result
// }
// console.log(result(array));
// 5. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести товар с максимальным прайсом
// interface Product {
//     id: number;
//     title: string;
//     count: number;
//     price: number
// }
// const array: Product[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]
// function res(array: Product[]): number {
//     let max = 0
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].price > max) max = array[i].price
//     }
//     return max
// }
// console.log(res(array));
// 6. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести средний прайс среди всех продуктов
// interface Product {
//     id: number;
//     title: string;
//     count: number;
//     price: number
// }
// const array: Product[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]
// function result(array: Product[]): number {
//     const result = array.reduce((sum, elem) => sum +  elem.price, 0)
//     return result / array.length
// }
// console.log(result(array));
// 7. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести тот товар, где количество * прайс является наибольшим значением
// interface Product {
//     id: number;
//     title: string;
//     count: number;
//     price: number
// }
// const array: Product[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]
// function result(array: Product[]): number {
//     let max = 0
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].price * array[i].count > max) max = array[i].price * array[i].count
//     }
//     return max
// }
// console.log(result(array));
// 8. У вас есть массив строковых значений. Необходимо вывести значения массива
// без дубликатов. Добавить проверки на тип данных, почту
var emails = [
    's@mail.ru',
    's3@mail.ru',
    's123@mail.ru',
    's123@mail.ru',
    's@mail.ru'
];
var isValid = function (emails) {
    for (var index = 0; index < array.length; index++) {
        if (condition) {
        }
    }
};
var getUnicEmail = function (emails) {
    var newArr = [];
    for (var i = 0; i < emails.length; i++) {
        if (!newArr.includes(emails[i]))
            newArr.push(emails[i]);
    }
    return newArr;
};
console.log(getUnicEmail(emails));
