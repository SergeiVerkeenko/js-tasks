// 4. Реализуйте класс Word, и функцию isPalindrome которая будет выводить в alert
// соответствующее будевое значение. Если значения 2 инпутов являются
// палиндромом -> true, в противном случае false
class Word {
    constructor() {
        this.isPalindrome()
    }
    isPalindrome() {
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', () => {
            const one = document.querySelector('.one').value
            const two = document.querySelector('.two').value.split('').reverse().join('')
            if (one == two) console.log(true);
            else console.log(false);
        })
    }
}
const word = new Word();
