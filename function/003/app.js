// 3. Напишите функцию, которая принимает статичный массив строк. Необходимо
// отфильтровать значения и оставить только те, где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]
const arr = ['by', 'belarus', 'de', 'ru', 'germany'];

function getStatArr(newArr) {
    let res = newArr.filter(el => el.length < 3)
    return res;
}
console.log(getStatArr(arr));