// Пользователь вводит четырехзначное число. Напишите скрипт, который будет
// выявлять является ли каждое составляющее числа четным либо нечетным.
// Добавить проверку на ввод только чисел
// 1234 -> 1 – неч 2 – чет 3 – неч 4 - чет

const a =prompt('Пользователь вводит четырехзначное число');
if (!isNaN(a)) { 

    console.log((a[0]%2==0) ? `${a[0]} - чет` : `${a[0]} - неч`);
    console.log((a[1]%2==0) ? `${a[1]} - чет` : `${a[1]} - неч`);
    console.log((a[2]%2==0) ? `${a[2]} - чет` : `${a[2]} - неч`);
    console.log((a[3]%2==0) ? `${a[3]} - чет` : `${a[3]} - неч`);

} else {
    console.log('ne korrekt');
}