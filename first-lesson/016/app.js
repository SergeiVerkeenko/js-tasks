// 17. Пользователь вводит с клавиатуры 2 числа: a и b. 
// Проверьте, что a делится без
// остатка на b. Если это так - выведите 'Делится'
//  и результат деления, иначе
// выведите 'Делится с остатком' и остаток от деления
const a = +prompt('Введите первое число');
const b = +prompt('Введите второе число');
if (a/b%1==0) {
    console.log(`Делится и результат деления - ${a/b}`);
}
else{
    console.log(`Делится с остатком, остаток - "${a%b}"`);
}