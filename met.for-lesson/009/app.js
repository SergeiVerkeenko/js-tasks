
// 9. На вход число. Необходимо вывести все числа от 1 до введенного числа. Добавить
// проверку вводимого значения, если это текст –> сообщение об ошибке
const a = 7;
let b = 0;
if (!isNaN(a)) {
    for (let i = 0; i < a; i++) {
        b += +1
        console.log(b);
    }
} else {
    console.log('сообщение об ошибке');
}
