// // // console.log(a % 2 == 0 ? 'Chet' : 'Nechet');
// // Пользователь вводит число от 1 до 7,
// //     соответствующее дню недели.Необходимо
// // вывести день для введенного числа.
// // 1 -> Понедельник

const a = +prompt('ВВести номер дня');
let result;
switch (a) {
    case 1:
        result = 'Pn';
        break;
    case 2:
        result = 'Vt';
        break;
    case 3:
        result = 'Sr';
        break;
    case 4:
        result = 'Cht';
        break;
    case 5:
        result = 'Pya';
        break;
    case 6:
        result = 'Sub';
        break;
    case 7:
        result = 'vs';
        break;
    default:
        console.log('povtorite')

}
console.log(result);