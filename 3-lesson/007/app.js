// 7. На вход программе подаётся строка.
//  Замените все @ на '!' с помощью
// глобального поиска и замены (2 способа)

const a = prompt('enter message');
console.log(a.replaceAll('@', '!'));
console.log(a.split('@').join('!'));