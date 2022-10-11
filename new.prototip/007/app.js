// 7. На вход подается число. Необходимо каждое значение возвести в степень
// индекса и вычислить сумму.
// 12345 = 1
// 0 + 2
// 1 + 3
// 2 + 4
// 3 + 5
// 4
// const num = prompt('').split('');
const num = '1234'.split('');
function check(num) {
    res = 0;
    for (let i = 0; i < num.length; i++) {
        res += num[i] ** i
    }
    return res
}
console.log(check(num));