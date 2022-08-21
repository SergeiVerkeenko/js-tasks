// Найти квадратный корень числа. 
// Если же число без плавающей точки, то просто
// вывести его. В противном случае необходимо 
// округлить число до целых.
// Добавить проверку на ввод только чисел
let a = prompt('enter value');
if (!isNaN(a)) {
    let res = Math.sqrt(a);
    if (Number.isInteger(res)) {
        console.log(res);
    } else {
        console.log(Math.round(res));
    }
    console.log((Number.isInteger(res)) ? res : Math.round(res));
} 