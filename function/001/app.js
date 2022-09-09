// 1. Пользователь вводит имя фамилию. Необходимо создать функцию
// возвращающую строку вида «Привет, {имя} {фамилия}»

const nameV = prompt('Enter Name');
const surName = prompt('Enter surName');

function getName(nameV, surName) {
    return `Привет,${nameV} ${surName} `
}
console.log(getName(nameV, surName));
console.log(getName(prompt('Name'), prompt('surName')));
