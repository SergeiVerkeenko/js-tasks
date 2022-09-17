// 3. Напишите функцию, которая принимает почту и возвращает объект, вида
// {
// email,
// active: true / false
// }
// true, если почта содержит @, .com / .ru. False в противном случае
const email = 'verkeenko@gmail.com';
function checkMail(newMail) {
    const obj = { email: newMail };
    if (newMail.includes('@') && newMail.includes('.com') || newMail.includes('.ru')) {
        return { ...obj, active: true }
    } else {
        return { ...obj, active: false }
    }
}
console.log(checkMail(email));