// Есть значение. Добавить проверку на 
// ввод только чисел. Если число, вывести true,
// в противном случае false (isNaN)
let a = prompt('');
if (isNaN(a)) {
    console.log(false);
} else {
    console.log(true);
}
console.log(isNaN(a) ? false : true);