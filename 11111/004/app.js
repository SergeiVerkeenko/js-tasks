// 4. Реализуйте функцию на генерацию ряда Фибоначчи используя рекурсию
// Числа Фибоначчи – ряд натуральных (целых и положительных) чисел, каждое из
// которых является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233

// function fibon(num) {
//     if (num < 2) return num;
//     return fibon(num - 2) + fibon(num - 1)
// }



function fibon(num) {
    let arr = [0, 1];
    if (num < 2) {
        return arr[num];
    }
    for (let i = 2; i <= num; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    return arr[num];
}
console.log(fibon(5));
