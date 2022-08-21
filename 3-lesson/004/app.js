// Ввести строку. Проверить на isNaN. 
// Если число, то ошибка ввода. Если это строка
// то узнать какая у нее длина. 
// Привести к одному регистру, убрать лишние пробелы
const a = prompt('').trim().toLowerCase();
console.log((isNanN(a)) ? a.length : 'Error');
if (isNanN(a)) {
    console.log(a.length);
} else {
    console.log('Error');
}