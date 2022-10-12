
// 1. Реализуйте функцию, которая будет считать количество своих вызовов
function sum() {
    let res = 0;
    return (a) => {
        res += a;
        console.log(res);
    }
}
const check = sum(1);
check(1)
check(1)
check(1)
check(1)
check(1)
check(1)