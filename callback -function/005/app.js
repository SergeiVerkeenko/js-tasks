// 5. На входе 10 элементов. Из элементов составить 
// 2 массива по 5 элементов. Далее
// необходимо сравнить массивы. Если они идентичны, 
// то вывести булевое true, в
// // противном случае false. forEach

const arr_1 = [];
const arr_2 = [];
for (let i = 0; i < 10; i++) {
    let input = +prompt('');
    if (i < 5) {
        arr_1.push(input)
    } else {
        arr_2.push(input)
    }
}
let arr_res = 0;
arr_1.forEach(elem => {
    if (arr_2.includes(elem)) {
        arr_res += 1
    }
})
console.log(arr_res === 5 && arr_1.length == arr_2.length ? true : false);
