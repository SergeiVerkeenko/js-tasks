// 4. На входе объект. Ключи и значения - 
// автоинкремент (генерируется
//     автоматически от 1 до n). Написать функцию на поиск 
// в объекте только четных
//     ключей. 

const obj = {};
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    const input = +document.querySelector('.input').value
    for (let i = 0; i < input; i++) {
        obj[i] = Math.floor(Math.random() * 100)
    }
    let res = Object.keys(obj).filter(el => el % 2 == 0)
    console.log(res);
})