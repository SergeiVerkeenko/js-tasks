
const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', () => {
    return document.querySelector('.input').disabled = ''
})
btn.addEventListener('click', () => {
    return document.querySelector('.input').disabled = 'disabled'
})