// 4. На вход программе подается число в двоичной системе счисления. Необходимо
// преобразовать его в десятичную систему счисления

const n = prompt('Enter value N').split('');
function transl(n) {
    res = 0;
    for (let i = 0; i < n.length; i++) {
        res += n[i] * 2 ** i
    }
    return res
}
console.log(transl(n));