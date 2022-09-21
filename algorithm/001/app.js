// 1. На вход подается строка в виде числа. Необходимо написать регулярное
// выражение. Если строка состоит только из чисел, то вывести булевое true, в
// противном случае бросить исключение и обработать

const num = '12398621s40';
function checkArr(str) {
    try {
        if (!/^[\d]+$/g.test(str)) throw new Error('Не числа')
        return true

    } catch (error) {
        return error.message
    }
}
console.log(checkArr(num));