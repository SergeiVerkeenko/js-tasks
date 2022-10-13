// 2. Реализуйте класс Calculator, который будет 
// хранить в себе 4 метода: сумма чисел,
// разность, произведение, частное. 2 числа 
// передаются в класс, далее вызываеются
// соответствующие функции. Добавить проверки на ввод

class Calculator {
    constructor(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    }

    getSumm() {
        return this.value1 + this.value2
    }

    getDeff() {
        return this.value1 - this.value2
    }

    getUmn() {
        return this.value1 * this.value2
    }

    getDel() {
        return this.value1 / this.value2
    }

}
const calculator = new Calculator(2, 3);
console.log(calculator.getSumm());
console.log(calculator.getDeff());
console.log(calculator.getDel());
console.log(calculator.getUmn());