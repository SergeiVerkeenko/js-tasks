// 5. На входе объект и число n, символизирующее количество пар ключ-значение.
// Ключи и значения - автоинкремент (генерируется автоматически от 1 до n).
// Проверить есть ли ключ 10 в объекте. 

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    const input = +document.querySelector('.input').value;
    const obj = {};
    for (let i = 0; i < input; i++) {
        obj[i] = Math.floor(Math.random() * 100)
    }
    console.log(obj.hasOwnProperty(10));

    console.log(10 in obj);

    const arr = Object.keys(obj).map((el) => +el)
    console.log(arr.some(el => el == 10));

    console.log(arr.filter(el => el == 10).length ? true : false);

    let a = false;

    arr.forEach(el => el == 10 ? a = true : null)
    console.log(a);

    console.log(arr.includes(10));

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 10) {
            console.log(true);
            break
        }
    }
    if (/[1][0]/g.test(arr.join(' '))) {
        console.log(true);
    }
    let i = 0;
    while (i < arr.length) {
        if (arr[i] == 10) {
            console.log(true);
            break
        }
        i++
    }
    console.log(5);

})