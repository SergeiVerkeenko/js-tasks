// // 19. Даны три числа a, b, c.
// //  Напишите программу, которая находит корни квадратного
// // уравнения
// // ax^2 + bx + c = 0
// // Если уравнение имеет два корня, то следует вывести их в
//  порядке возрастания.
const a = +prompt('Введите первое число');
const b = +prompt('Введите второе число');
const c = +prompt('Введите третье число');
let x1=(-b+Math.sqrt(b**2-4*a*c))/2*a;
let x2=(-b-Math.sqrt(b**2-4*a*c))/2*a;
let x=[x1, x2]
if (x1==x2){
    console.log(`Один корень - ${x1}`);
}
else {
console.log(x.sort());
}
