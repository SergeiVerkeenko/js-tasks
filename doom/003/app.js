const btn = document.querySelector('.btn');
function check(input) {
    if (isNaN(input.value)) throw new Error('ERROR')
    if (!input.value) throw new Error('ERROR')
}
let arr = [];
btn.addEventListener('click', () => {
    let input = document.querySelector('.input');
    try {
        check(input)
        arr.push(input.value);
        document.querySelector('.res').innerHTML = `вы ввели ${arr}`;
        input.value = ''
    } catch (error) {
        alert(error.message)
        input.value = ''
        input.style = 'border: 1px solid red'
    }
})