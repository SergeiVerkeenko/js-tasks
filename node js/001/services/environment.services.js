
class Enviroment {


    arr = [
        1, 2, 3, 4, 5, 8, 8, 8, 9
    ]

    getEnviroment() {
        const newArr = this.arr.sort()
        const uniqArr = []
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] != newArr[i - 1] && newArr[i] != newArr[i + 1]) {
                uniqArr.push(newArr[i])
            }
        }
        if (!uniqArr.length) throw new Error('Error')
        return uniqArr
    }

    getEnviromentWithId(id) {
        const newWrapperArr = [];
        let arrItem = []
        for (let i = 0; i < this.arr.length; i++) {
            if (i % id === 0 && i != 0) {
                newWrapperArr.push(arrItem)
                arrItem = []
            }
            if (Math.ceil(this.arr.length / id) === arrItem.length) {

            }
            arrItem.push(this.arr[i])
        }
        return newWrapperArr
    }
}

module.exports = { Enviroment }