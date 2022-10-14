// 5. Реализуйте класс Anagram(Анаграмма это слово или
//  фраза, 
//     полученный путем
//     замены букв исходного слова или фразы).
//     Создать функцию для вывода ряда true,
//     если слова являются анаграммами.
//     Добавить проверки на ввод

class Anagram {
    constructor(str1, str2) {
        this.str1 = str1;
        this.str2 = str2;
    }

    check() {
        const sortedStr1 = this.str1.split('').sort().join('')
        const sortedStr2 = this.str2.split('').sort().join('')
        return sortedStr1 === sortedStr2 ? true : false
    }
}

const anagram = new Anagram('пила', 'липа');
console.log(anagram.check());