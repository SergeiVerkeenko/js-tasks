// Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести длину строки
let a = prompt('');
if (isNaN(a)) {

    console.log(a.length);
} else{
    console.log('ne korrekt');
}