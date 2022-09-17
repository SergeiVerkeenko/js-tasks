// 5. Работа с замыканием. Напишите функцию, каждый вызов который будет
// генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока
// не будут перебраны все числа из этого промежутка.
function multiplay() {
    const arr = [];
    return function () {
        let b = Math.round(Math.random() * 25)
        arr.push(b)

        if (arr.includes(b)) {
            arr.splice(b)
        }
        return arr;
    };
}


const wrapper = multiplay();
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());