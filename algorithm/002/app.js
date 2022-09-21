// 2. На вход подается строка вида “имя фамилия возраст”. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать


const str = 'ser ver 22';
function checkArr(str) {
    try {
        if (!/^[a-zA-Z]+ [A-Za-z]+ [0-9]+$/g.test(str)) throw new Error('Не числа')
        return true

    } catch (error) {
        return error.message
    }
}
console.log(checkArr(str));