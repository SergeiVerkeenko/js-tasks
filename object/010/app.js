// 10. На входе статичный объект, включающий 
// такие ключи как name, age, birthday,
// значения ключей – пустые строки.
//  Считать данные с клавиатуры и заполнить
// объект соответствующими данными. 
// Добавить проверки на ввод

const obj = {
    name: '',
    age: '',
    birthday: ''
}

for (const key in object) {
    let input = prompt(`asd `).trim();
    if (input == '') {
        obj[key] = input;
    }

}
console.log(obj);