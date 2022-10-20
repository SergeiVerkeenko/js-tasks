let numb = prompt('Введитецифру диапазона угадывания');
const arr = [];
for (let i = 0; i <= numb; i++) {
    arr.push(i)
}

function searchBinary(arr) {
    let start = 0;
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2);
    for (; ;) {
        let b = prompt(`Твое число ${middle}?`).toLowerCase();
        if (b == 'да') {
            return alert(`Я угадал`)
        } else if (b == 'нет') {
            let a = prompt(`Больше или меньше ${middle}`).toLowerCase();
            if (a == 'больше') {
                start = middle + 1;
                middle = Math.floor((start + end) / 2);
            } else if (a == 'меньше') {
                end = middle - 1;
                middle = Math.floor((start + end) / 2);
            } else alert('Будь внимательнее, дружок. Напиши больше или меньше!')
        } else alert('Будь внимательнее, дружок. Напиши Да или Нет!')
    }
}
console.log(searchBinary(arr));












// function searchBinary(numb) {
//     let start = 0;
//     let end = numb;
//     let middle = (start + end) / 2;
//     for (; ;) {
//         let a = prompt(`Твое число ${middle}?`)
//         if (a == 'Да') {
//             return alert(`Я угадал`)
//         } else {

//             if (prompt('') == 'Больше') {
//                 start = middle + 1;
//             } else {
//                 end = middle - 1;
//             }
//         }
//     }

// }
// return middle;