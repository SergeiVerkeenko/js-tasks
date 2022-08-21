// На вход программе подается переменная date,
//  в котрой лежит дата в формате
// 'xxxx-xx-xx'. Преобразуйте эту дату в формат
//  'xx/xx/xxxx’. (reverse)

const date = '2022-08-14';
console.log(date.split('-').reverse().join('/'));