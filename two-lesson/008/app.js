// Пользователь вводит номер месяц. 
// Необходимо вывести пору года по номеру
// месяца (2 способа)

const a = +prompt('ВВести номер mes');
let result;
switch (a) {
    case 12:
    case 1:
    case 2:
        result = 'zima';
        break;
    case 3:
    case 4:
    case 5:
        result = 'vesna';
        break;
    case 6:
    case 7:
    case 8:
        result = 'leto';
        break;
    case 9:
    case 10:
    case 11:
        result = 'osen';
        break;
    default:
        console.log('povtorite')

}
if (a == 12 || a >= 1 && a <= 2) {
    console.log('zima');
} else if (a >= 3 && a <= 5) {
    console.log('vesna');
}
else if (a >= 6 && a <= 8) {
    console.log('leto');
}
else if (a >= 9 && a<=11) {
    console.log('osen');
 } else {
    console.log('nekorr');
 }