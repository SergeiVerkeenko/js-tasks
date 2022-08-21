// 27. На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
// заканчивается подстрокой .com или .ru, то вывести true, в противном случае false

const a = 'https://github.com/SergeiVerkeenko';
(a.includes('http') && a.includes('/') && (a.includes('.com') || a.includes('.ru'))) ? console.log(true) : console.log(false);