// 2. Напишите функцию, которая принимает строку в маленьком регистре и
// возаращает строку, где каждое слово начинается с большого регистра
// hschool company -> Hschool Company 

const str = prompt('Enter srt');
function toUpperCaseStr(a) {
    let newArr = a.map(el => {

        return el.slice(0, 1).toLowerCase() + el.slice(1).toLowerCase()
    })
    return newArr.join('')
}
console.log(toUpperCaseStr(str));