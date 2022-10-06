// 2. Написать функцию на подсчет количества пар 
// ключ значение в объекте. Добавить
// проверки 


let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    const obj = {}
    let input = document.querySelector('.input').value
    for (let i = 0; i < input; i++) {
        obj[i] = Math.floor(Math.random() * 100)
    }
    const count = qty(obj)
    console.log(count);
})

function qty(obj) {
    let arr = Object.entries(obj);
    return arr.length
}

