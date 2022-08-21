// 19. На вход программе подается строка. Преобразуйте первую букву каждого слова
// строки в верхний регистр (for)

const a = 'vskj ndsf kllkj dsf kk l lsd';
let b = '';
for (let i = 0; i < a.length; i++) {

    if (i == 0) {
        b += a[i].toLocaleUpperCase();
    }
    else if (a[i - 1] == ' ') {
        b += a[i].toLocaleUpperCase();
    } else {
        b += a[i];
    }

}
console.log(b);
