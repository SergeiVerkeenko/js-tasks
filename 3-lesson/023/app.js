// 8. На вход подается 1 слово. Необходимо 
// преобразовать слово в хештег. Добавить
// проверку на ввод текстовых значений
// hSСhOol -> #hschoo
const str = 'hSСhOol'.toLowerCase().trim();
if (isNaN(str)) console.log(`#${str}`);
let result = '';
for (let i = 0; i < str.length; i++) {
    if (i===0) {
        result+='#'
    }
    result += str[i];
}
console.log(result);