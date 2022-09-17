// 6. Работа с замыканием. Реализуйте функцию, которая будет считать количество
// своих вызовов

function multiplay() {
    let count = 0;
    return function () {
        count++
        return count;
    };
}

const wrapper = multiplay();
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
console.log(wrapper());
