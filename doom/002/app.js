const btn = document.querySelector('.btn');
function isValid(input) {
    if (!input) throw new Error('input is empty')
    if (!/^\+[0-9]{3}\([0-9]{2}\)[0-9]{3}\-[0-9]{2}\-[0-9]{2}$/g.test(input)) throw new Error('ERROR')
    return true

}

btn.addEventListener('click', () => {
    let input = document.querySelector('.inp');
    try {
        if (isValid(input.value)) {
            input.style = 'border: 1px solid black';
            alert(input.value)
            input.value = '';
        }

    } catch (error) {
        input.style = 'border: 1px solid red';
        input.value = '';
        alert(error.message)
    }
});