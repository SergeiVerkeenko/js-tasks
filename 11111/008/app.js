// 2. На входе массив значений. Необходимо его обработать. Если в массиве есть хотя
// бы 1 строка, бросить исключение. 

const arr = [1, 2, 3, 4, 5, 5]
function checkArr(x) {
    try {
        let bool = x.every(el => !isNaN(el));
        if (bool) {
            return x
        } else {
            throw new Error('odno ')
        }
    } catch (err) {
        return err.message
    }
}
console.log(checkArr(arr));