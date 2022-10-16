// 1. Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 4 метода: doPlus, doMinus, doMultiply, doDivide
class DomHtml {
    constructor() {
        this.main()
    }
    main() {
        const btn = document.querySelector('.btn');

        btn.addEventListener('click', () => {
            const value1 = +document.querySelector('.input1').value
            const value2 = +document.querySelector('.input2').value
            this.doMinus(value1, value2)
            this.doPlus(value1, value2)
            this.doMultiply(value1, value2)
            this.doDivide(value1, value2)
        })
    }
    doPlus(value1, value2) {
        document.querySelector('.summ').innerHTML = `Результат суммы ${value1 + value2}`
    }

    doMinus(value1, value2) {
        document.querySelector('.minus').innerHTML = `Результат вычитания ${value1 - value2}`
    }
    
    doMultiply(value1, value2) {
        document.querySelector('.umn').innerHTML = `Результат умножения ${value1 * value2}`
    }

    doDivide(value1, value2) {
        document.querySelector('.del').innerHTML = `Результат деления ${value1 / value2}`

    }

}
const domHtml = new DomHtml();