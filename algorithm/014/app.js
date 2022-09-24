// 9. Middleware – cвязующее программное обеспечение. 
// Прежде чем запрос попадет на сервер, запрос поступает в middleware,
//  где находятся функции валидаторы. Необходимо реализовать функцию 
//  валидатор, которая обрабатывает 2 поля: почту, имя пользователя. 
//  Для проверки полей воспользуйтесь регулярными выражениями. 
//  Middleware-функция возвращает true, если оба условия отработали 
//  успешно и false в противном случае

const email = 'sergei@mail.com';
const name = 'Sergei';
function getValid(emale, name) {
    try {
        if (!/^[a-zA-Z\.\d]+$/g.test(name)) throw new Error('ERROR!!!!')
        if (!/^[a-zA-Z]+@[a-z]+\.[a-z]{1,3}$/g.test(email)) throw new Error('ERROR!!!!')
    return true
    } catch (error) {
        return error.message
    }
}
console.log(getValid(email, name));