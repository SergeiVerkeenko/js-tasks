// 4. На вход подается строка в виде электронной почты пользователя.
//  Необходимо
// написать регулярное выражение для данной строки.
//  Если же строка подходит
// под регулярное выражение, то вывести булевое true, 
// в противном случае бросить
// исключение и обработать

const mail = 'sergio@mail.com ';
function checkArr(str) {
    try {
        if (!/^[a-zA-Z0-9\.]+@[a-z]+\.[a-z]+$/g.test(str)) throw new Error('Не числа')
        return true
    } catch (error) {
        return error.message
    }
}
console.log(checkArr(mail));

