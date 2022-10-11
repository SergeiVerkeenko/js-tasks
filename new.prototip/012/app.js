// 1. По условию задачи даны 2 инпута и кнопка. Необходимо вернуть true, если часть
// символов 1 строки есть в другой.
// 'rkqodlw', 'world‘ – true
// 'kacvtas', 'steak' – false
const bnt = document.querySelector('.btn');
function checkInput(first, second) {
    if (first == '' || second == '') throw new Error('Пустая строка')
    if (/[/d]/.g.test(first) || /[/d]/.g.test(first)) throw new Error('Не только буквы')
}
bnt.addEventListener('click', () => {
    try {
        const firstInput = document.querySelector('.firstInput').value;
        const secondInput = document.querySelector('.secondInput').value;
        checkInput(firstInput, secondInput)
        let count = 0;
        for (let i = 0; i < secondInput.length; i++) {
            if (firstInput.includes(secondInput[i])) {
                count++
            }
        }
        alert(count == secondInput.length)

    } catch {
        alert(error.message)
   }
})