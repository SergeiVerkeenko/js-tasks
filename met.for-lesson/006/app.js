
// 6. На вход подается строка в виде электронной почты.
//  Если строка содержит “@” и
// оканчивается на .com, .ru, то вывести true,
//  иначе false

const a = 'sverkeenko@mail.com';
(a.includes('@') && (a.includes('.com') || a.includes('.ru'))) ? console.log(true) : console.log(false);


