const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let arr = [0, 1];
    let num = document.querySelector('.input');
    // let num2 = document.querySelector('.res');



    if (num < 2) return document.querySelector('.res').innerHTML = arr[num];

    for (let i = 2; i <= num.value; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    return document.querySelector('.res').innerHTML = arr;

    // if (num.value < 2) {
    //     return document.querySelector('.res').innerHTML = num.value;
    // }

    // return document.querySelector('.res').innerHTML = (num.value - 2) + (num.value - 1)

})
