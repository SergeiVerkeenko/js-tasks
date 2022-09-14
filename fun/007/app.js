// 2. Напишите функцию, принимающую в качестве параметра строку. Необходимо
// оставить в строке только униакльные символы. IIFE
// Позволяеткопироватьтекстиз -> позвляеткираьс

const str = prompt('STRING').split('');
const doNewArr = (arr) => {
    const newArr = [];
    arr.forEach(el => {

        if (!newArr.includes(el)) {
            newArr.push(el)
        }
    });
    return newArr.join('')
}
console.log(doNewArr(str));