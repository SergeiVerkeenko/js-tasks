// 18. Пользователь вводит число, явдяющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt. 
const num_el_arr = +prompt('enter');
const arr = [];
for (let i = 0; i < num_el_arr; i++) {
    arr.push(+prompt(''));
}
console.log(arr);