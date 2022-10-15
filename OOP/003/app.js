//  Реализуйте класс WordString, который будет иметь следующие методы: метод 
// reverseString, переворачивающий строку, метод upperFirst, возвращающий строку, 
// где первая буква заглавная и метод upperEvery, который делает заглавной 
// первую букву каждого слова этой строки. 
 
class WordString { 
    constructor(str) { 
      this.str = str; 
    } 
    reverseString(str) { 
   
      return this.str.split('').reverse().join('') 
    } 
    upperFirst(str) { 
      str = this.str.split(''); 
      for (let i = 0; i < str.length; i++) { 
        if (i === 0) str[i] = str[i].toUpperCase() 
      } 
      return str.join('') 
    } 
    upperEvery(str) { 
      str = this.str.split(''); 
      for (let i = 0; i < str.length; i++) { 
        if (str[i - 1] === ' ' || i === 0) str[i] = str[i].toUpperCase() 
   
      } 
      return str.join('') 
    } 
  } 
  const wordString = new WordString('privet dsl f ds lk sdf lk ') 
  console.log(wordString.reverseString()); 
  console.log(wordString.upperFirst()); 
  console.log(wordString.upperEvery());