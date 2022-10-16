// 5. Реализуйте класс ServerPost. 
// Обязательными функциями считаются функции
// middleware, controller, service, repository. 
// Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. 
// Принимает json
// service – функция проверки на то что с repository
//  вернулось значение
// repository – функция, симулирующая БД. 
// Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. 
// Массив находится в приложении
// Задание:
// на вход подается JSON вида:
// `{
// "name": "Test", "age": 1
// }`
// Необходимо добавить в массив БД объект только в том случае,
//  если нет совпадений
// по name. Если совпадения нет, то в объект клиента добавить 
// ключ id с последним
// возможным уникальным id БД, таким образом, чтобы в БД
//  был запушен объект вида
// {"id": 6, "name": "Test", "age": 1}
// Если совпадение есть – ошибка. Добавить проверки 

class ServerPost {
    middleware(obj) {
        if (!Number.isInteger(obj.age)) throw new Error('Error 3')
    }
    controller(obj) {
        try {
            const objParsed  = JSON.parse(obj);
            const arr = this.service(objParsed);
            this.middleware(objParsed);
            document.querySelector('.res').innerHTML = JSON.stringify(this.service(arr))
        } catch (error) {
            alert(error.message);
        }
    }
    service(obj) {
        const arr = this.repository(obj)
        if (!arr.length) throw new Error('ERROR 2')
        return arr
    }
    repository(obj) {
        let arr = [
            { "id": 1, "name": "Yesenia", "age": 22 },
            { "id": 2, "name": "Hanna", "age": 22 },
            { "id": 3, "name": "Stanislau", "age": 25 },
            { "id": 4, "name": "German", "age": 18 },
            { "id": 5, "name": "Maria", "age": 27 }
        ];
        const filtered = arr.some(el => el.name !== obj.name)
        if (!filtered) throw new Error('Error 1')
        arr.push(obj);
        return arr;
    }
}
const serverPost = new ServerPost();
serverPost.controller(`{
    "name": "Test", "age": 1
    }`
)