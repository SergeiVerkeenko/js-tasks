// Пользователь вводит с клавиатуры 2 числа: 
// основание степени и показатель
// степени. Необходимо возвести число во введенную
//  степень Напишите программу, которая считывает 
//  длины двух катетов в прямоугольном треугольнике
// и выводит его площадь. Используйте формулу:
// S =1/2∙a ∙ b
const a = +prompt('Введите длину первого катета');
const b = +prompt('Введите длину второго катета');
console.log(`${0.5*a*b}`);