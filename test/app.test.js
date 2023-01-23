// 1. Написать функцию с использованием TypeScript которая принимает 2 числа и
// возводит 1 во 2 степень. Добавить необходимые проверки.
// Написать тест для функции



// function doPow(a, b) {
//     if (isNaN(a) || isNaN(b)) return false
//     if (typeof a === 'string' ||typeof b === 'string' ) return false
//         return a ** b
// }


// describe('ters doPow func', () => {
//     test('test doPow function success', () => {
//         const pow = doPow(2, 2)
//         expect(pow).toBe(4)
//     })

//     test('test doPow function false', () => {
//         const pow = doPow('q', 'q')
//         expect(pow).toBeFalsy()
//     })
//     test('test doPow function false', () => {
//         const pow = doPow('2', '2')
//         expect(pow).toBeFalsy()
//     })


// })

// 2. Написать функцию с использованием TypeScript которая принимает 2 числа и
// возвращает результат произведения 2 множителей. Добавить необходимые
// проверки.
// Написать тест для функции

// function doMultiPly(a, b) {
//     if (!a || !b) return false
//     if (isNaN(a) || isNaN(b)) return false
//     return a * b
// }

// describe('doMultiPly', () => {
//     test('return number', () => {
//         const res = doMultiPly(2, 2)
//         expect(res).toBe(4)

//     })
//     test('return undefiend', () => {
//         const res = doMultiPly()
//         expect(res).toBeFalsy()

//     })
//     test('return false', () => {
//         const res = doMultiPly('a', 'b')
//         expect(res).toBeFalsy()

//     })
// })

// 3. Написать функцию с использованием TypeScript которая принимает массив
// чисел и находит сумму всех элементов. Добавить необходимые проверки.
// Написать тест для функции

// function doSum(arr) {

//     if (!arr.length) return false
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (isNaN(arr[i])) return false
//         sum += arr[i]
//     }
//     return sum
// }
// function randomArr(b) {
//     const arr = []
//     for (let i = 0; i < b; i++) {
//         arr.push(Math.floor(Math.random() * 100))
//     }
//     return arr
// }

// describe('test ', () => {
//     test('test duSum ', () => {
//         const res = doSum([1, 2, 3])
//         expect(res).toBe(6)
//     })
//     test('test duSum with string', () => {
//         const res = doSum([1, 2, 'privet'])
//         expect(res).toBeFalsy()
//     })
//     test('test duSum with null arr', () => {
//         const res = doSum([])
//         expect(res).toBeFalsy()
//     })
//     test('test duSum with null arr lenght', () => {
//         const b = Math.floor(Math.random() * 10);
//         const arr = randomArr(b)

//         const res = doSum(arr)
//         expect(arr).toBeTruthy()
//         expect(arr).toHaveLength(b)
//         expect(res).toBeTruthy()
//     })
// })

// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10 и произведены в Германии
// Написать тест для функции

// function getData(arr) {
//     const filtered = arr.filter((el) => el.count > 10 && el.producer === 'Германия');
//     if (!filtered.length) return false
//     return filtered
// }

// describe('test ', () => {
//     const arr = [
//         { id: 1, title: 'Часы', count: 10, price: 500, producer: 'Германия' },
//         { id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' },
//         { id: 3, title: 'Моноблок', count: 6, price: 2200, producer: 'Германия' },
//         { id: 4, title: 'Ноутбук', count: 13, price: 3000, producer: 'Китай' },
//         { id: 5, title: 'Планшет', count: 22, price: 2100, producer: 'Китай' },
//         { id: 6, title: 'Телевизор', count: 4, price: 4100, producer: 'Германия' },
//         { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }
//     ]
//     test('test getData toBe ', () => {
//         const res = getData(arr)
//         expect(res).toEqual([
//             { id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' },
//             { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }
//         ])
//         expect(res).toHaveLength(2)
//     })
//     test('test getData with null and undefound ', () => {
//         const res = getData([])
//         expect(res).toBeFalsy()
//     })
// })

// 5. У вас есть массив строковых значений, состоящий из номеров телефонов.
// Необходимо вывести значения массива без дубликатов. Добавить необходимые
// проверки.
// Написать тест для функции

// function checkUniq(arr) {
//     if (isValid(arr)) {
//         const uniqArr = []
//         for (let i = 0; i < arr.length; i++) {
//             if (uniqArr.includes(arr[i])) uniqArr.push(arr[i])
//         }
//         return uniqArr
//     } else {
//         return false
//     }
// }

// function isValid(arr) {
//     if (!arr.length) return false
//     let err = 0
//     arr.forEach(element => !/^\[0-9]$/gm.test(element) ? err++ : nul);
//     return err > 0 ? false : true
// }

// describe('test ', () => {
//     const arr = ['123123', '123214', '123214']

//     test('test getData with null and undefound ', () => {
//         const res = checkUniq(arr)
//         const equal = ['123123', '123214']
//         expect(res).toEqual(equal)
//         expect(res).toHaveLength(2)
//     })
//     test('test getData with null and undefound ', () => {
//         const res = checkUniq([])
//         expect(res).toBeFalsy()
//     })
// })
// 6. На входе статичный объект. Необходимо посчитать количество пар (ключ:
//     значение) где значение число и вывести количество. Добавить необходимые
//     проверки.
//     Написать тест для функции


function findCount(obj) {
    if(!Object.keys(obj).length) return false
    let count = 0;
    for (const key in obj) {
        if (!isNaN(obj[key])) {
            count++
        }
    }
    return count
}

describe('test function findCount', () => {
    const obj = { 1: 1, 2: 'pribt', 3: "true" }

    test('test ', () => {
        const res = findCount(obj)
        expect(res).toBe(1)
        
    })
    test('test ', () => {
        const res = findCount({})
        expect(res).toBeFalsy()
        
    })
})
