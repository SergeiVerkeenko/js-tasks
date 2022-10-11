// 3. По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив строк. Необходимо вывести: полный
// массив из всех элементов, а также массив из уникальных значений
let btn = document.querySelector('.btn');
let arr = [];
btn.addEventListener('click', () => {
    let input = document.querySelector('.input');
    arr.push(input);
    document.querySelector('result').innerHTML() = arr
    let arrUnic = []
    arr.forEach(element => !arrUnic.includes(element) ? arrUnic.push(element) : false);
    document.querySelector('.avg').innerHTML = arrUnic;
})