// Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести текущую строку в большом регистре

let a = prompt('');
if (isNaN(a)) {

    console.log(a.toUpperCase());
} else {
    console.log('ne korrekt');
}