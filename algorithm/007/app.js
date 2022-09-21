// 7. На вход подается строка в виде пароля. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать.
// Пароль должен содержать:
// • Буквы в UPPER регистре
// • Буквы в LOWER регистре
// • Числа
// • Специальные символы
// • Длина не менее 8 символов

const password = '123';
password.length
function checkArr(str) {
    if (str.length > 8) {
        try {
            if ((!/[0-9A-Za-z\%\!]/g.test(str))) throw new Error('Не числа')
            return true
        } catch (error) {
            return error.message
        }
    } else {
        try {
            if (1) throw new Error('Не числа')
            return true
        } catch (error) {
            return error.message
        }
    }
}
console.log(checkArr(password));