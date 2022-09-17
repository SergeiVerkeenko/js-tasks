// 1. На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)

const pwd = 'P@55word'.split('');
function isValid(newPwd) {
    const sumBools = ['-', '`', '!', '@']
    let res = 0;
    for (let i = 0; i < newPwd.length; i++) {
        if (sumBools.includes(newPwd(i))) res++
    }
    let boolUpperValue = newPwd.some(el => el = el.toUpperCase() ? true : false)
    let boolNumValue = newPwd.some(el => !isNaN(el) ? true : false)
    let boolStrValue = newPwd.some(el => isNaN(el) ? true : false)

    return boolNumValue && boolStrValue && boolUpperValue && res > 0 && newPwd.length > 8
}

console.log(isValid(pwd));
