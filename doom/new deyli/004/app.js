// const btn = document.querySelector('.btn');

// const obj = {};
// let arr = [];

// function validInput(input) {
//     if (!/^[a-z]{1,3}\/[0-9]{6}-[a-z]+$/g.test(input)) throw new Error('ERROR')
// }

// btn.addEventListener('click', () => {
//     try {
//         const input = document.querySelector('.input')
//         validInput(input.value)

//         if (!arr.includes(input.value)) arr.push(input.value)

//         for (const item of arr) {
//             const newEl = document.createElement('p')
//             newEl.textContent = item;
//             document.querySelector('.res').appendChild(newEl)
//         }

//         input.value = ''
//         arr = [];
//     } catch (error) {
//         console.log('ERROR');
//     }
// })
const btn = document.querySelector('.btn');

let obj = {};
let arr = [];

function validInput(input) {
    if (!/^[a-z]{1,3}\/[0-9]{6}-[a-z]+$/g.test(input)) throw new Error('ERROR')
}

btn.addEventListener('click', () => {
    try {
        const input = document.querySelector('.input')
        validInput(input.value)
        for (const key in obj) {
            if (obj[key] === input.value) throw new Error('такая группа уже есть')
        }
        obj = {};
        obj[Math.random() * 100] = input.value
        for (const key in obj) {
            const newEl = document.createElement('p')
            newEl.textContent = obj[key];
            document.querySelector('.res').appendChild(newEl)
        }
        document.querySelector('.res').style = 'border 1px solid red;';
        input.value = ''
    } catch (error) {
        console.log('ERROR');
    }
})
