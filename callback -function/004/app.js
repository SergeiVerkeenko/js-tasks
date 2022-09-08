// 4. Заполнять массив числами бесконечно до тех пор,
//     пока длина массива не будет
// равна 5. Вывести массив в консоль(цикл for, while)

let arr = [];
while (arr !== 5) {
    let someData = prompt('');
    if (!isNaN(someData) || someData == '') {
        arr.push(+someData)
    }
}
console.log(arr);

for (; ;) {
    let a = prompt('');
    if (!isNaN(a) || a == '') {
        arr.push(+a)
    }
    if (arr.length === 5) break
}

while (1) {
    let a = prompt('');
    if (!isNaN(a) || a == '') {
        arr.push(+a)
    }
    if (arr.length === 5) break;
}
console.log(arr);
