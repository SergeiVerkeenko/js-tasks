// Реализуйте Singer – производный класс, базовый – Worker.
// Класс Worker состоит из: свойств name, surname в конструкторе; метода getInfo(), с
// помощью которого можно вывести одновременно имя и фамилию;
// Класс Singer наследует name, surname в конструкторе при помощи метода super и
// дополнительно принимает и дополняет конструктор свойствами: years, birth, style;
// класс включает метод getInfo(), который переопределяет метод базового класса и
// расширяет его, отображая в консоль информацию о певце: years, birth, style.
// Необходимо вызвать метод getInfo из 2 экземпляров worker, singer

// interface iSinger {
//     name: string;
//     surname: string;
//     getInfo(): void;
//     years: number;
//     birth: number;
//     style: string;
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

interface iNumberArray {
    sumArr(): Array<number | string> | number;

}
interface iConsoleArray {
    sumArr(): Array<number | string> | number;

}

class NumberArray implements iNumberArray {
    sumArr(): Array<number | string> | number {
        let arr: Array<number | string> = []
        for (let i: number = 0; i < 10; i++) {
            arr.push(Math.floor(Math.random() * 10))
        }
        return arr
    }

}

class ConsoleArray extends NumberArray implements iConsoleArray {
    sumArr(): Array<number | string> | number {
        const res: Array<number | string> | number = super.sumArr()
        return res.reduce((sum, el) => sum + el, 0)
    }

}

const consoleArray = new ConsoleArray()

console.log(consoleArray.sumArr());
