// 26. На вход программе подается строка текста. Напишите программу, которая
// проверяет, что строка заканчивается подстрокой .com или .ru. Если
// заканчивается, то вывести true, в противном случае false

const a = 'milanNews.ru';
(a.includes('.com') || a.includes('.ru')) ? console.log(true) : console.log(false);
