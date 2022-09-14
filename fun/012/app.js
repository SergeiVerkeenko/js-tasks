// 7. Напишите функцию, генерирующую надежный пароль. (Math.random)

const n = +prompt('Введите количество символов для пароля');

function multiplay() {
    const arr = [];
    return function () {
        let b = Math.round(Math.random() * 10 ** n)
        arr.push(b)

        if (arr.includes(b)) {
            arr.splice(b)
        }
        return arr;
    };
}
const wrapper = multiplay();
console.log(wrapper());