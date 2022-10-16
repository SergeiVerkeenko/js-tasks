// 2. Реализуйте класс DomHtml, который будет
//  взаимодействовать с DOM по клику на
// кнопку. Класс содержит 1 метод валидации,
//  называемый middleware, в котором
// происходит проверка на почту.
//  Вывести true, если провека успешна

class DomHtml {
    constructor() {
        this.main()
    }
    main() {
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', () => {
            const value = document.querySelector('.input').value
            this.middleware(value)
        })
    }
    middleware(value) {
        try {
            if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+\.[a-z]{2,6}/g.test(value)) throw new Error('Error')
            alert(true)
        } catch (error) {
            alert(error.message)
        }
    }
}

const domHtml = new DomHtml();