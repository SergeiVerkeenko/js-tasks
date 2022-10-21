// 3. Реализуйте класс Html. В нем функцию renderArr, 
// принимающую селектор. Вам
// неоходимо отобразить массив 
// ['Minsk', 'Brest', 'Vitebsk'] в принимаемый селектор

// 4. Дополнить 3. Значения массива отображать одиз за одним через appendChild
// class Html {

//     constructor(arr, selector) {
//         this.arr = arr
//         this.selector = selector
//     }
//     renderArr() {
//         document.querySelector(this.selector).textContent = this.arr
//     }
// }
// const html = new Html(['Minsk', 'Brest', 'Vitebsk'], '.p');
// html.renderArr()
class Html {

    constructor(selector) {
        this.selector = selector
        this.doArray()
    }

    doArray() {

        document.querySelector('.btn').addEventListener('click', () => {
            document.querySelector(this.selector).innerHTML = ''
            const input = document.querySelector('.input').value
            let arr = []
            for (let i = 0; i < input; i++) {
                arr.push(Math.floor(Math.random() * 10))
            }
            for (let i = 0; i < arr.length; i++) {
                const teg = document.createElement('p')
                teg.textContent = arr[i];
                this.renderArr(teg)
            }
        })

    }

    renderArr(teg) {
        document.querySelector(this.selector).appendChild(teg)

    }

}
const html = new Html('.p');
