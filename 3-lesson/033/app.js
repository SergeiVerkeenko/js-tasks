// 21. На вход программе подается строка, состоящая из имени и фамилии человека,
// разделенных одним пробелом. Напишите программу, которая проверяет, что имя
// и фамилия начинаются с заглавной буквы.
// Chris Alan => true
// chris alan => false

const a = 'Chris Alan';

if (a[0] == a[0].toLocaleUpperCase()) {
    for (let i = 0; i < a.length; i++) {
        if (a[i - 1] == ' ' && a[i - 1] == a[i - 1].toLocaleUpperCase()) {

            console.log(true);
        } 

    }
} else {
    console.log(false);
}