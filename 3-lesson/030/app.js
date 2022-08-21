// 18. Пользователь вводит строку. Необходимо вывести все гласные отдельной
// строкой (for)
fullstack => ua
let a = prompt('');
let b = '';
for (let i = 0; i< a.length; i++) {
  if (isNaN(a) && (a[i]=='u' || a[i]=='a'|| a[i]=='i' || a[i]=='o' || a[i]=='e')) {
    b+=a[i]
  }
    }
    console.log(b);