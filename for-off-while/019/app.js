// 19. Пользователь вводит число, явдяющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt. Проверить каждый
// prompt на число (ввод строки, проверка на isNaN)

const num_el_arr = +prompt('enter');
const arr = [];
for (let i = 0; i < num_el_arr; i++) {
    a = prompt('')
    if (!isNaN(a)) {
        arr.push(a);
    }
}
console.log(arr);
