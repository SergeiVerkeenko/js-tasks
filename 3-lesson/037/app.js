// На вход программе подается строка из букв А, Г, Ц, Т. Напишите программу,
// которая подсчитывает сколько букв
// АааГГЦЦцТТтттА => А – 4 Г – 2 Ц – 3 Т – 5
const a = 'АааГГЦЦцТТтттА'.toLocaleUpperCase();
let b = 0;
let c = 0;
let d = 0;
let f = 0;

for (let i = 0; i < a.length; i++) {
    switch (a[i]) {
        case 'А':
            b += +1
            break;
        case 'Г':
            c += +1
            break;
        case 'Ц':
            d += +1
            break;
        case 'Т':
            f += +1
            break;

        default:
            break;
    }

}
console.log(`А - ${b} Г - ${c} Ц - ${d} Т - ${f}`);