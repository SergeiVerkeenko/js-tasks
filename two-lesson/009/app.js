// Пользователь вводит число: 1, 2, 3 или 4.
//  Если это значение '1', то вывести в консоль
// 'зима', '2' – 'весна' и так далее. 
// Добавить проверку на ввод только чисел. Решите
// задачу через switch-case. 
let a = prompt('');
if (!isNaN(a)) {
    switch (a) {
        case 1:
            result = 'zima';
            break;
        case 2:
            result = 'vesna';
            break;
        case 3:
            result = 'leto';
            break;
        case 4:
            result = 'osen';
            break;
        default:
            console.log('povtorite')
    }
} else {
    console.log('povtorite')
}
