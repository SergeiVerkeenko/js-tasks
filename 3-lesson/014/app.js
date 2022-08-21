// Пользователь вводит дату в формате 'xxxx-xx-xx'. 
// Преобразуйте эту дату в формат
// 'xx.xx.xxxx'.

const date = 'xxxx-xx-xx';
console.log(date.split('-').reverse().join('.'));