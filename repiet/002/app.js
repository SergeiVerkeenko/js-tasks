// 1. Посчитать количество гласных и согласных в строке

class Dom {
    constructor() {
        this.fillArray()
    }

    fillArray() {
        let newArr = [];
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', () => {
            try {
                const one = document.querySelector('.one').value
                this.checkArray(one)
                newArr.push(one)
                let unicArr = [];
                document.querySelector('h1').innerHTML = newArr
                newArr = newArr.sort();
                for (let i = 0; i < newArr.length; i++) {
                    if (newArr[i] != newArr[i - 1] && newArr[i] != newArr[i + 1]) {
                        unicArr.push(newArr[i])
                    }
                }
                document.querySelector('h2').innerHTML = unicArr
                
            } catch (error) {
                alert(error.message)
            }

        })

    }

    checkArray(one) {
        if (!/^[0-9]+$/gm.test(one)) throw new Error('ERRROORRR')
    }
}

const dom = new Dom();