// 1. Реализуйте класс DomHtml, который будет считать количество кликов по html
// кнопке
// function name() {
//     let count = 0;
//     return function () {
//         count++
//         return count
//     }
// }
// const fun = name();
// console.log(fun());
// console.log(fun());

// const obj = {
//     count: 0,
//     getCount: function () {
//         this.count++
//         return this.count
//     }
// }
// console.log(obj.getCount());
// console.log(obj.getCount());

// class DomHtml {
//     count = 0;
//     getCount() {
//         this.count++
//         return this.count
//     }

// }
// const domHtml = new DomHtml()
// console.log(domHtml.getCount());
// console.log(domHtml.getCount());


class DomHtml {

    constructor() {
        this.click()
    }

    count = 0;

    click() {
        const btn = document.querySelector('.btn')
        btn.addEventListener('click', () => {
            this.count++
            console.log(this.count);
        })

    }

}
const domHtml = new DomHtml()
