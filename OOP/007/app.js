// 7. Реализуйте класс ServerById. 
// Обязательными функциями считаются функции
// middleware, controller, service, repository. 
// Цепочка взаимодействия между
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. 
// Принимает json
// service – функция проверки на то что с repository 
// вернулось значение
// repository – функция, симулирующая БД. 
// Хранит массив данных. Взаимодействие
// с этим массивом осуществляется только в repository. 
// Массив находится в
// приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": "javascript"
// }`
// Необходимо вывести в консоль найденный элемент 
// массива по id если таковой
// имеется. В противном случае бросить исключение. 
// Добавить проверки

class ServerById {

    middleware(parseData) {
        if (typeof parseData.id !== 'string') throw new Error('id не строка')
    }
    controller(obj) {
        try {
            const parseData = JSON.parse(obj);
            this.middleware(parseData)
            const gotData = this.service(parseData)
            return gotData
        } catch (error) {
            return error.message
        }
    }
    service(parseData) {
        const gotData = this.repository(parseData);
        if (gotData.length === 0) throw new Error('Пустой массив')
        return gotData
    }

    repository(parseDataClient) {
        const arr = `[
            { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
            { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
            { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
        ]`;
        const parseDB = JSON.parse(arr);
        const found = parseDB.filter(el => el.id === parseDataClient.id)
        return found
    }
}
const serverById = new ServerById();
console.log(serverById.controller(`{"id": "javascript"}`));