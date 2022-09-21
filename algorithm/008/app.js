// 8. Дана строка состоящая из чисел, букв, специальных символов. Необходимо
// оставить в строке только буквенные символы используя регулярные выражения.
// Если же длина исходной строки изменилась, вывести true, в противном случае
// бросить исключение и обработать

const str = '123jkahd1&&';
function checkArr(str) {
    try {
        const chenged = str.replace(/[0-9\\\/\%\&]/g, "")
        if (chenged.length == str.length) throw new Error('ERROR')
        return true

    } catch (error) {
        return error.message
    }
}
console.log(checkArr(str));