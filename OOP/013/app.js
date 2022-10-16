// 4. Реализуйте класс ServerById.
//  Обязательными функциями считаются функции
// middleware, controller, service, repository.
//  Цепочка взаимодействия между
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. 
// Принимает json
// service – функция проверки на то что с
//  repository вернулось значение
// repository – функция, симулирующая БД.
//  Хранит массив данных. Взаимодействие
// с этим массивом осуществляется только в 
// repository. Массив находится в
// приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": 1
// }`
// Необходимо вывести в консоль найденный элемент 
// массива по id если таковой
// имеется. В противном случае бросить исключение.
//  Добавить проверки

class ServerById {
    // constructor(obj) {
    //     this.controller()
    // }
    middleware(obj) {
        if (!Number.isInteger(obj.id)) throw new Error('Error')
    }
    controller(obj) {
        try {
            const objParsed = JSON.parse(obj)
            this.middleware(objParsed)
            document.querySelector('.div').innerHTML = JSON.stringify(this.service(objParsed))
        } catch (error) {
            alert(error.message);
        }
    }
    service(obj) {
        const data = this.repository(obj)
        if (!data.length) throw new Error('ERROR')
        return data
    }
    repository(obj) {
        let arr = [
            { "id": 1, "name": "Yesenia", "age": 22 },
            { "id": 2, "name": "Hanna", "age": 22 },
            { "id": 3, "name": "Stanislau", "age": 25 },
            { "id": 4, "name": "German", "age": 18 },
            { "id": 5, "name": "Maria", "age": 27 }
        ]
        return arr.filter(el => el.id === obj.id)
    }
}


const serverById = new ServerById()
serverById.controller(`{
    "id": 1
    }`)