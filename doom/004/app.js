const btn = document.querySelector('.btn');
let flag = true;
const obj = {
    1: 'red',
    2: 'black',
    3: 'white',
    4: 'yellow',
    5: 'blue'
};
btn.addEventListener('click', () => {
    btn.style = `background-color: ${obj[Math.ceil(Math.random() * Object.entries(obj).length)]}`;
})