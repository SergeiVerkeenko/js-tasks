// 6. На вход подается строка вида: путь к файлу. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать
// C:\Users\Admin\Desktop\test.txt -> true
// C:/Users/Admin/Desktop/test.txt -> true

const path = 'C:/Users/Admin/Desktop/test.txt';
function checkArr(str) {
    try {
        if (!/^[A-Za-z]+:+(\\|\/)[a-zA-Z]+(\\|\/)[a-zA-Z]+(\\|\/)[a-zA-Z]+(\\|\/)[a-zA-Z]+\.[a-zA-Z]+$/g.test(str)) throw new Error('Не числа')
        return str

    } catch (error) {
        return error.message
    }
}
console.log(checkArr(path));
