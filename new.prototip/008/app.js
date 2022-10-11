// 1. По условию задачи даны инпут и кнопка. 
// Пользователь вводит в инпут значение.
// Необходимо вывести среднее этого числа
const btn = document.querySelector('.btn');
const arr = [];
btn.addEventListener('click', () => {
    const input = +document.querySelector('.input').value;
    arr.push(input);
    document.querySelector('.result').innerHTML = arr;
    document.querySelector('.avg').innerHTML = arr.reduce((sum, el) => sum + el, 0) / arr.length
})