// Реализуйте Singer – производный класс, базовый – Worker.
// Класс Worker состоит из: свойств name, surname в конструкторе; метода getInfo(), с
// помощью которого можно вывести одновременно имя и фамилию;
// Класс Singer наследует name, surname в конструкторе при помощи метода super и
// дополнительно принимает и дополняет конструктор свойствами: years, birth, style;
// класс включает метод getInfo(), который переопределяет метод базового класса и
// расширяет его, отображая в консоль информацию о певце: years, birth, style.
// Необходимо вызвать метод getInfo из 2 экземпляров worker, singer

// interface iSinger {
//      
// }

// interface iWorker {
//     name: string;
//     surname: string;
//     getInfo(): void;
// }

// class Worker_ implements iWorker {
//     name: string;
//     surname: string;
//     constructor(name, surname) {
//         this.name = name
//         this.surname = surname
//     }

//     getInfo(): void {
//         console.log(`name ${this.name}, surname ${this.surname}`);
//     }
// }

// class Singer_ extends Worker_ implements iSinger {
//     name: string;
//     surname: string;
//     years: number;
//     birth: number;
//     style: string;

//     constructor(name: string, surname: string, years: number, birth: number, style: string) {
//         super(name, surname)
//         this.years = years
//         this.birth = birth
//         this.style = style
//     }

//     getInfo(): void {
//         super.getInfo()
//         console.log(`years ${this.years} , birth ${this.birth} , style${this.style}`);


//     }
// }


// const worker_ = new Worker_('ser', 'ver')
// const singer_ = new Singer_('sergei', 'verkeq', 27, 1996, 'pop')

// worker_.getInfo()
// singer_.getInfo()


// Реализуйте класс NumberArray. NumberArray хранит функцию showArr, которая
// заполняет и возвращает массив из 5 рандомных элементов. Класс ConsoleArray
// является производным по отношению к базовому, родительскому NumberArray и
// содержит функцию showArr. Необходимо переопределить showArr из базового
// класса и записать в переменную используя метод super. Далее дополняем
// переопределенный метод отображением результата в console

// interface iNumberArray {
//     showArr(): Array<number | string> | void
// }
// interface iConsoleArray {
//     showArr(): Array<number | string> | void

// }


// class NumberArray implements iNumberArray {
//     showArr(): Array<number | string> | void {
//         let arr: Array<number | string> = []
//         for (let i: number = 0; i < 10; i++) {
//             arr.push(Math.floor(Math.random() * 10))
//         }
//         return arr
//     }
// }


// class ConsoleArray extends NumberArray implements iConsoleArray {
//     showArr(): Array<number | string> | void {
//         let res: Array<number | string> | void = super.showArr()
//         console.log(res);

//     }

// }

// const numberArray = new NumberArray()

// console.log(numberArray.showArr());

// const consoleArray = new ConsoleArray()

// consoleArray.showArr()

// 3. Реализуйте класс NumberArray. NumberArray хранит функцию sumArr, которая
// заполняет и возвращает массив из 5 рандомных элементов. Класс ConsoleArray
// является производным по отношению к базовому, родительскому NumberArray и
// содержит функцию sumArr. Необходимо переопределить sumArr из базового
// класса записав в переменную используя метод super. Далее посчитать сумму всех
// элементов массива

// interface iNumberArray {
//     sumArr(): Array<number | string> | number;

// }
// interface iConsoleArray {
//     sumArr(): Array<number | string> | number;

// }

// class NumberArray implements iNumberArray {
//     sumArr(): Array<number | string> | number {
//         let arr: Array<number | string> = []
//         for (let i: number = 0; i < 10; i++) {
//             arr.push(Math.floor(Math.random() * 10))
//         }
//         return arr
//     }

// }

// class ConsoleArray extends NumberArray implements iConsoleArray {
//     sumArr(): Array<number | string> | number {
//         const res: Array<number | string> | number = super.sumArr()
//         return res.reduce((sum, el) => sum + el, 0)
//     }

// }

// const consoleArray = new ConsoleArray()

// console.log(consoleArray.sumArr());

















// const arr = [
//     {
//         id: 1,
//         name: 'часы',
//         price: 2000,
//         count: 2
//     },
//     {
//         id: 2,
//         name: 'телефон',
//         price: 1000,
//         count: 5
//     },
//     {
//         id: 3,
//         name: 'телевизор',
//         price: 2000,
//         count: 10
//     },
// ]

// const res = arr.reduce((sum, el) => sum += el.count * el.price, 0)
// console.log(res);

// `anna@main.ru      evdhevcgh      annapleshko@mail.ru    dvlmdk   dcervr  43e32
// test@gmail.com 
// ` 


// Реализуйте класс Pwd. Pwd хранит функцию showPwd, которая формирует и
// возвращает рандомно сгенерированный пароль из 8 чисел. Класс Validation
// является производным по отношению к базовому, родительскому Pwd и
// содержит функцию showPwd. Необходимо переопределить showPwd из базового
// класса и записать в переменную используя метод super. Далее дополняем
// переопределенный метод отображением результата в console

// interface iPwd {
//     showPwd(): string;

// }
// interface iConsoleArray {
//     showPwd(): string;

// }

// class Pwd implements iPwd {
//     showPwd(): string {
//         let pwd: string = ''
//         for (let i: number = 0; i < 8; i++) {
//             pwd += Math.floor(Math.random() * 10)
//         }
//         return pwd
//     }

// }

// class ConsoleArray extends Pwd implements iConsoleArray {
//     showPwd(): string {
//         const res: string = super.showPwd()
//         return res

//     }

// }

// const consoleArray = new ConsoleArray()

// console.log(consoleArray.showPwd());

// Реализуйте Validation – производный класс, базовый – StringValue.
// Класс StringValue состоит из: свойствa value в конструкторе;
// Класс Validation наследует value в конструкторе при помощи метода super и
// дополнительно принимает и дополняет конструктор свойством: confirmValue;
// класс Validation включает метод checkValue(), который проверяет, что
// передаваемое значение value в конструктор – строка и состоит из букв. Также
// добавить проверку на равенство value и confirmValue
// Необходимо вызвать метод checkValue экземпляра validation


// class StringValue {
//     value: string
//     constructor(value: string) {
//         this.value = value
//     }


// }

// class Validation extends StringValue {
//     confirmValue: string

//     constructor(value: string, confirmValue: string) {
//         super(value)
//         this.confirmValue = confirmValue
//     }

//     checkValue(): void {
//         if (this.value == this.confirmValue) console.log(true);
//         else console.log(false);



//     }
// }

// const validation = new Validation('privet', 'privet')
// validation.checkValue()

// Классы Employee и ProductionWorker.
// Напишите класс Employee (Сотрудник), который содержит:
// • имя сотрудника;
// • номер сотрудника.
// Затем напишите класс ProductionWorker (Рабочий), который является подклассом
// класса Employee.
// Класс ProductionWorker содержит:
// • номер смены (целое число, к примеру, 1, 2 или 3);
// • ставка почасовой оплаты труда.
// Напишите методы получатели и методы-модификаторы для каждого класса.
// После того как эти классы будут написаны, напишите программу, которая создает
// объект класса ProductionWorker и предлагает пользователю ввести данные по
// каждому атрибуту данных этого объекта. Сохраните данные в объекте и
// примените в этом объекте методы получатели, чтобы получить эти данные и
// вывести их на экран.


// class Employee {
//     names: string;
//     numberEmployee: number;
//     constructor(names: string, numberEmployee: number) {
//         this.names = names
//         this.numberEmployee = numberEmployee
//     }
// }

// class ProductionWorker extends Employee {
//     numberSmeny: number;
//     stavka: number;
//     constructor(names: string, numberEmployee: number, stavka: number, numberSmeny: number) {
//         super(names, numberEmployee)
//         this.stavka = stavka
//         this.numberSmeny = numberSmeny
//     }

//     doObj(): void {
//         let obj: object = {
//             name: this.names,
//             'Sotrudnik': this.numberEmployee,
//             stavka: this.stavka,
//             'Smena': this.numberSmeny
//         }
//         console.log(obj);

//     }

// }
// const productionWorker = new ProductionWorker('Sergei', 13, 1000, 5)
// productionWorker.doObj()


// Классы Person и Customer. Напишите класс Person с атрибутами данных для
// имени, адреса и телефонного номера человека. Затем напишите класс Customer
// (Клиент), который является подклассом класса Person. Класс Customer должен
// иметь поле для номера клиента и атрибут булевых данных,
// указывающий, хочет ли клиент быть в списке рассылки или нет.
// Продемонстрируйте экземпляр класса Customer в простой программе

// class Person {
//     name: string;
//     adress: string;
//     numer: number;

//     constructor(name: string, adress: string, numer: number) {
//         this.name = name
//         this.adress = adress
//         this.numer = numer
//     }
// }

// class Customer extends Person {
//     rassilka: boolean;
//     numClient: number;
//     constructor(name: string, adress: string, numer: number, rassilka: boolean, numClient: number) {
//         super(name, adress, numer)
//         this.rassilka = rassilka
//         this.numClient = numClient
//     }

//     doObj(): void {
//         let obj = {
//             name: this.name, 'adress': this.adress,
//             'nomer tel': this.numer, 'rassilka': this.rassilka, 'nome Clienta': this.numClient
//         }
//         console.log(obj);

//     }

// }

// const customer = new Customer('ser', 'Minsk', +375297416707, true, 3)

// customer.doObj()

// Реализовать следующие классы Круг, Треугольник и Квадрат, которые
// наследуются от Figure.Каждый экземпляр класса должен содержать свойства
// Площадь и Имя.Вывести всю информацию о фигурах в консоль.Площадь должна
// рассчитываться по математическим формулам.Класс Figure содержит поля: pi =
//     3.14, r = radius, a = side, h = height, а также сеттеры для данных полей.Дочерние
// классы содержать геттеры на получение площади

// class Figure {
//     pi = 3.14;
//     r: number
//     a: number
//     h: number
//     constructor(r: number, a: number, h: number) {
//         this.r = r;
//         this.h = h;
//         this.a = a;

//     }
// }

// class Krug extends Figure {
//     doInf(): void {
//         console.log(`Круг площадь =${this.pi * this.r ** 2}`);

//     }
// }
// const krug = new Krug(20, 10, 10)
// krug.doInf()







class Task1 {
    private doT1() {

    }

    public doT2() {

    }

    protected doT3() {

    }
}

class Task2 extends Task1 {
    public doT2(): void {

    }

}

class Task3 extends Task2 {
    doT2()

    doT3()
}










