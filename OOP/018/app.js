// 2. Реализуйте класс Client, содержащий метод sendRequest.
//  Ваша задача получить
// данные из 2 инпутов: почта и пароль и по клику на кнопку
//  «отправить запрос на
// сервер» (отправку запроса мы не проходили => просто 
//     вывести на экран
// образовавщийся объект вида: { email: email, pwd: pwd }
// 3. Реализуйте класс Server, получающий объект из предыдущего задания и
// сохраняющий его в «БД» (массив) при условии, что email уникальный. Создать
// генерацию нового id. Обязательными функциями считаются функции middleware,
// controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие
// с этим массивом осуществляется только в repository. Массив находится в
// приложении

class Client {
    constructor() {
        this.sendRequest()
    }

    sendRequest() {
        document.querySelector('.btn').addEventListener('click', () => {
            try {
                let email = document.querySelector('.one').value;
                let pwd = document.querySelector('.two').value;

                this.checkValue(email, pwd);

                const clientData = JSON.stringify({ email: email, pwd: pwd })
                const server = new Server();
                server.controller(clientData)
            } catch (error) {
                alert(error.message)
            }
        })

    }

    checkValue(email, pwd) {
        if (!email.length) throw new Error('Email Error')
        if (!pwd.length) throw new Error('pwd Error')
        return true
    }
}

class Server {

    middleware() {

    }

    controller(clientData) {
        const parsedClientData = JSON.parse(clientData);
        this.service(parsedClientData);
    }

    service(parsedClientData) {
        this.repository(parsedClientData)
    }

    repository(parsedClientData) {
        const arr = `[
        { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwd12345678" },
        { "id": 2, "email": "hanna@mail.ru", "pwd": "pwd123123" },
        { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest444" },
        { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq111" },
        { "id": 5, "email": "maria@mail.ru", "pwd": "pwd746552" }
        ]`
        const parsedDB = JSON.parse(arr)
        const filtered = parsedDB.filter(el => el.email === parsedClientData.email)
        if (filtered.length !== parsedDB.length) throw new Error('совпадения есть')
        else filtered.push(parsedClientData)
    }

}
}
const client = new Client();
