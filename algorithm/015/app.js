// 4. Реализайте функцию, которая принимает строку и определяет является ли слово
// изограммой. Изограмма – это слово, в котором нет повторяющихся букв,
// последовательных или непоследовательных
// Dermatoglyphics –> true
// aba –> false
// moOse –> false 

const str = 'Dermatogglyphics'.toLowerCase().split('').sort().join('');
function checkStr(str) {
    try {
        let flag = true;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === str[i + 1]) {
                flag = false;
                break
            }
        }
        if (!flag) throw new Error('eto ne izigramma')
        return flag
    } catch (error) {
        return error.message;
    }
}
console.log(checkStr(str));