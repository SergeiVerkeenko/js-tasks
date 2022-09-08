
// 2. На входе 7 чисел. Все эти значения пользователь вводит 
// с клавиатуры и заполяет
// 5 первыми значениями массив. Далее необходимо создать 
// массив из тех
// значений, которые являются числами и НЕ равны 2 другим 
// введенным. Если
// длина массива равна 0, то вывести ‘Массив пуст’.
//  Добавить проверку на ввод
// только чисел после каждого введенного элемента. forEach
// 
const arr = [];
const arr_1 = [];
let i = 0;
while (i < 7) {
    if (i < 5) {
        let input = prompt('');
        if (!isNaN(input)) {
            arr.push(input);
        }
    } else {
        let input = prompt('');
        if (!isNaN(input)) {
            arr_1.push(input);
        }
    }
    i++
}
const arr_res = [];
arr.forEach(elem => {
    if (!arr_1.includes(elem)) {
        arr_res.push(elem);
    }
});
console.log(arr_res);