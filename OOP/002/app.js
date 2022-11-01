// // 2. Реализуйте класс Calculator, который будет 
// // хранить в себе 4 метода: сумма чисел,
// // разность, произведение, частное. 2 числа 
// // передаются в класс, далее вызываеются
// // соответствующие функции. Добавить проверки на ввод

// class Calculator {
//     constructor(value1, value2) {
//         this.value1 = value1;
//         this.value2 = value2;
//     }

//     getSumm() {
//         return this.value1 + this.value2
//     }

//     getDeff() {
//         return this.value1 - this.value2
//     }

//     getUmn() {
//         return this.value1 * this.value2
//     }

//     getDel() {
//         return this.value1 / this.value2
//     }

// }
// const calculator = new Calculator(2, 3);
// console.log(calculator.getSumm());
// console.log(calculator.getDeff());
// console.log(calculator.getDel());
// // console.log(calculator.getUmn());
// const arr = [2, [1, 2], 20, 1, '5', { a: 10 }, [4, 6], {}];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'object') {
//         result += 100;
//     } else if (typeof arr[i] === 'array') {
//         result += 10;
//     } else if (arr[i] > 3) {
//         result++;
//     }
// }
// console.log(result)


// function fn(person) {
//     person = {
//         namе: 'Петя',
//     };
// }

// const student = {
//     name: 'Вася',
// };
// fn(student);

// console.log(student);

let a = 0;
function fn() {
    let b = 0;
    return function () {
        a++ 
        b++
        return { a: a, b: b };
    }
}

const f1 = fn()
const f2 = fn()
f1();
a++;
f1();
f2();
f2();
const result = f2();
a++;
console.log(result.a, result.b);