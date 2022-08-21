// На вход программе подается строка. Напишите программу, которая меняет
// регистр символов, другими словами замените все строчные символы заглавными
// и наоборот.
// Swap Case => sWAP cASE

const a = 'Swap Case';
let b = '';
for (let i = 0; i < a.length; i++) {
    if (a[i] == a[i].toLowerCase()) {
        b += a[i].toLocaleUpperCase()
    } else {
        b += a[i].toLowerCase()
    }
}
console.log(b);