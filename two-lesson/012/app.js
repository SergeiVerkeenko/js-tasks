// Напишите программу, в которой рассчитывается сумма и произведение цифр
// положительного трёхзначного числа
// 123 -> Сумма цифр = 6 Произведение цифр = 6
let a = prompt('Введите трехзначное число');
if (!isNaN(a)) {
    console.log(`Cумма цифр ${+a[0] + +a[1] + +a[2]}`);
    console.log(`Произведение цифр ${+a[0] * +a[1] * +a[2]}`);

} else {
    console.log('ne korrekt');
}