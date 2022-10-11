// 5. По условию задачи даны инпут и кнопка. Необходимо преобразовать строку в
// CamelCase (примерСтрокиВCamelCase )

const btn = document.querySelector('.btn');
const arr = [];
btn.addEventListener('click', () => {
    const arrInput = document.querySelector('.input').value.trim();
    let str = ''
    // for (let i = 0; i < arrInput.length; i++) {
    //     str += arrInput[i][0].toUpperCase() + arrInput[i].slice(1).toLowerCase()
    // }
    // document.querySelector('.result').innerHTML = str[0].toLowerCase() + str.slice(1)
    for (let i = 0; i < arrInput.length; i++) {
        if (arrInput[i - 1] == ' ') {
            str += arrInput[i].toUpperCase()
        } else {
            str += arrInput[i].toLowerCase()
        }
    }
    document.querySelector('.result').innerHTML = str.replaceAll(' ', '');
})