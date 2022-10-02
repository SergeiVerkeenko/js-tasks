const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let input = document.querySelector('.input');
    return document.querySelector('.res').innerHTML = `Результат = ${input.value * 2}`
})
