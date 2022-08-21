// 2. На вход подается строка из 2 и более слов.
//  Необходимо добавить тире между
// словами
let str = 'Milan champion is Italy';
console.log(str.split(' ').join('-'));
console.log(str.trim().replaceAll(' ', '-'));