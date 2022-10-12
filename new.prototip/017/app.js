// 2. Напишите алгоритм для нахождения факториала числа
const n = +prompt('Enter value N');
function factorial(n) {
    if (n <= 1) return 1
    return n * factorial(n - 1)
}

console.log(factorial(n));