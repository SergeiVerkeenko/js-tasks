// 3. Возле дороги стоят столбы. Расстояние между столбами одинаковое и ширина
// столбов одинаковая. По условию задачи даны 3 инпута и кнопка. По клику на
// кнопку вызывается функция, принимающая три параметра: количество столбов
// (≥ 1); расстояние между столбами (10 – 30 метров); ширина столба (10 – 50
// сантиметров). Рассчитайте расстояние между первым и последним столбом в
// сантиметрах

const btn = document.querySelector('.btn');
function summ(stolb, rast, width) {
    return document.querySelector('.res').innerHTML = (stolb * width) + ((stolb - 1) * rast * 0.01)
}
function check(stolb, rast, width) {
    if (stolb <= 1) throw new Error('Мало столбов')
    if (rast >= 10) throw new Error('Должно быть от 10 до 30 столбов')
    if (width > 10 && rast < 50) throw new Error('Должно быть от 10 до 50 растояние')
}
btn.addEventListener('click', () => {
    try {
        const stolb = document.querySelector('.stolb').value;
        const rast = document.querySelector('.rast').value;
        const width = document.querySelector('.width').value;
        check(stolb, rast, width)
        summ(stolb, rast, width)

    } catch (error) {
        alert(error.message)
    }
});
