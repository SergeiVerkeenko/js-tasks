// 1. Пользователь вводит имя фамилию. Необходимо создать функцию
// возвращающую строку вида «Привет, {имя} {фамилия}»

// const nameV = prompt('Enter Name');
// const surName = prompt('Enter surName');

// function getName(nameV, surName) {
//     return `Привет,${nameV} ${surName} `
// }
// console.log(getName(nameV, surName));
// console.log(getName(prompt('Name'), prompt('surName')));


// Реализуйте функцию, которая принимает число и возвращает возвенную в квадрат каждую цифру числа соединяя их. Добавить проверки

// 9119 -> 811181 (9^2 === 81, 1^2=== 1)

// function task(str) {
//     const res = []
//     for (let i = 0; i < str.length; i++) {
//         res.push(str[i] ** 2)
//     }

//     return console.log(res.join(''));

// }

// task('9119')


// const str1 = 'sergei'
// const res = []

// for (let i = str1.length; i >= 0; i--) {
//     res.push(str1[i])
// }
// console.log(res.join(''));

// function guessTheNumber(num) {
//     let start = 0;
//     let end = 100;
//     let middle = Math.floor((start + end) / 2);
//     for (let i = 0; i <= 100; i++) {
//         if (middle === num) {
//                 return num;
//           
//             }
//         } else {
//             
//             middle = Math.floor((start + end) / 2);
//         }
//     }
//     return middle;
// }

// function zam() {
//     let sum = 0
//     console.log(sum);
//     return function (a) {
//         sum += a
//         return sum
//     }
// }

// const wrap = zam()

// console.log(wrap(3));
// console.log(wrap(3));
// console.log(wrap(3));
// console.log(wrap(3));




// при каждом вызове 
// от 0 до 9
// записать в строку
// получается пароль

// function pwd() {
//     const str = []
//     return function () {
//         str.push(Math.floor(Math.random() * 10))
//         return str.join('')
//     }
// }

// const password = pwd()
// for (let i = 0; i < 9; i++) {
//  console.log(password());
// }

// const arr = [1, 23, 4, 5]
// function fack(arr) {
//     if (arr.length == 0) {
//         return 0
//     } else {
//         return arr.pop() + fack(arr)
//     }

// }

// console.log(fack(arr));

const obj = {
    value: 5,
    nodes: [{
        value: 7,
        nodes: [{
            value: 10,
            nodes: [{
                value: 1,
                nodes: []
            }]
        }]
    },
    {
        value: 3,
        nodes: [{
            value: 8,
            nodes: []
        }]
    },
    {
        value: 15,
        nodes: [{
            value: 5,
            nodes: [

            ]
        },
        {
            value: 9,
            nodes: [
                {
                    value: 6,
                    nodes: [

                    ]
                }
            ]
        }]
    }]
}


function sum(obj) {
    let x = 0
    
    if (obj.nodes == []) return
    else {
        x += obj.value
        return x + sum(obj)
    }

}

sum(obj)