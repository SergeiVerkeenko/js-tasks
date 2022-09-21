// 9. Банкоматы позволяют использовать 4 или 6 значные PIN-коды, а PIN-коды не
// могут содержать ничего, кроме ровно 4 или ровно 6 цифр. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать
// "1234“ -> true
// "12345“ -> false
// "a234“ -> false

const str = 'a446';
function checkArr(str) {
    if (str.length === 4 || str.length === 6) {
        try {
            if (!/^[0-9]+$/g.test(str)) throw new Error('false')
            return true

        } catch (error) {
            return error.message
        }

    } else {
        try {
            if (1) throw new Error('false')
        } catch (error) {
            return error.message
        }
    }
}
console.log(checkArr(str));