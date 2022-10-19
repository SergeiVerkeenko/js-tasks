// 5. Реализуйте класс Word, и функцию isAnagram которая будет выводить в alert
// соответствующее будевое значение. Если значения 2 инпутов являются
// анаграммами -> true, в противном случае false 
class Word {
    constructor() {
        this.isAnagram()
    }
    isAnagram() {
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', () => {
            let two = document.querySelector('.two').value.split('').sort().join('');
            let one = document.querySelector('.one').value.split('').sort().join('');
            if (one.includes(two) || two.includes(one)) console.log(true);
            else console.log(false);
        })
    }
}
const word = new Word();