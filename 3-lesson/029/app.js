// 17. Пользователь вводит строку. Необходимо посчитать количество согласных (for)

let a = prompt('').toLowerCase().trim().split('');
let b = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] == 'а' || a[i] == 'о' || a[i] == 'и' || a[i] == 'у' || a[i] == 'е' || a[i] == 'я' || a[i] == 'ю' || a[i] == 'ы' || a[i] == 'э' || a[i]==' ') {
        b += +1
    }
}
console.log(a.length-b);