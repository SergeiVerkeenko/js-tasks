// На вход подаются 2 строки. 
// Если исходная 1 строка зкаканчивается на 2 строку
// вывести true, в противном случае false 
const a = 'hschool.com'.split('.');
const b = 'com';
if (b===a[a.length-1]) {
    console.log(true);
} else{
    console.log(false);
}