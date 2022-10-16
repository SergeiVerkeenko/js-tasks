// 13. Реализуйте класс ServerPost. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1
// }`
// Неоходимо добавить в массив БД объект только в том случае, если нет совпадений
// по label. Если совпадения нет, то в объект клиента добавить ключ id со значением
// label в toLowerCase таким образом, чтобы в БД был запушен объект вида
// {"id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1}
// Если совпадение есть – ошибка. Добавить проверки

class ServerPost {
    middleware(parseData) {
        if (typeof parseData.label !== 'string') throw new Error('label не строка')
    }
    controller(obj) {
        try {
            const parseData = JSON.parse(obj); // наш обект 
            this.middleware(parseData)
            const gotData = this.service(parseData)
            gotData.push({ id: parseData.label.toLowerCase(), ...parseData });

            return gotData

        } catch (error) {
            return error.message
        }
    }

    service(parseData) {
        const gotData = this.repository(parseData);
        if (gotData.length === 0) throw new Error('пустой массив')
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
        const found = parseDB.filter(el => el.label !== parseDataClient.label) // ищем по label
        return found
    }
}
const serverPost = new ServerPost();
console.log(serverPost.controller(`{"label": "С++", "category": "programmingLanguages", "priority": 1}`));