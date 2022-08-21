// На вход программе подается строка. Напишите программу, которая подсчитывает
// количество буквенных символов в нижнем регистре.
// abcABCD12345 => 3

const a = 'abcABCD12345';
let b = 0;
for (let i = 0; i < a.length; i++) {
    if (isNaN(a[i]) && a[i] === a[i].toLowerCase()) {
        b += +1
    }
}
console.log(b);