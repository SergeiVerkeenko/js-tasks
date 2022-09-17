// 1. На входе число n. Напишите функцию, которая переворачивает число
const n = 127;

const doReverse = (number) => {
    return String(n).split('').reverse().join('');
}
console.log(doReverse(n));
