// // 16. Пользователь вводит с клавиатуры число. 
// Найдите корень введенного числа
// // (если же результат – число с плавающей точкой, 
// то округлить до 2 знаков после
// // запятой).
const a = +prompt('Введите число');
if (Math.sqrt(a)%1==0) {
    console.log(Math.sqrt(a));
}
else{
    console.log(Math.sqrt(a).toFixed(2));
}