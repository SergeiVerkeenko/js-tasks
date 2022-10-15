// 4. Реализуйте класс MathСalculation. В него передается число n – количество
// элементов массива. На основании числа формируется динамический массив из n
// элементов внутри класса. Создать функцию для подсчета всех четных чисел
// массива. Добавить проверки на ввод
class MathСalculation {
    arr() {
        const arr = [];
        const p = n;
        for (let i = 0; i < p; i++) {
            arr.push(Math.floor(Math.random() * 100))
        }
        const checkArr = arr.filter(el => el % 2 === 0)
        return checkArr.length
    }
}
const n = 20;
const mathСalculation = new MathСalculation(n);
console.log(mathСalculation.arr());