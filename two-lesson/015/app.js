//  Пользователь вводит 2 числа от 0 до 10. Сложите переменные так, чтобы в
// результате получилось выражение: “I’m хх". Проверки на ввод только чисел.
// Проверки на ввод чисел до 10. Если первое число – 0, то опустить его

const a = prompt('числа от 0 до 10');
const b = prompt('числа от 0 до 10');
if (!isNaN(a) && !isNaN(b) && a >= 0 && a <= 10) {
    if (a == 0) {
        console.log(`I'm ${b}`);
    } else {
        console.log(`I'm ${a + b}`);
    }
} else {
    console.log('ne korrekt');
}
