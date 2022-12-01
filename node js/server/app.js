const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('hello')
})
app.listen(8000,()=>console.log('server on'))



// const storage = [
//     {
//         id: 1,
//         title: 'часы',
//         price: 333,
//         count: 3
//     },
//     {
//         id: 2,
//         title: 'смартфон',
//         price: 33,
//         count: 3
//     },
//     {
//         id: 3,
//         title: 'тв',
//         price: 353,
//         count: 1
//     },
// ];

// const id = 2;
// function binSearch(storage, id) {
//     let one = 0;
//     let kon = storage.length;
//     let midl = Math.round((one + kon) / 2);
//     let res
//     for (let i = 0; i < kon; i++) {
//         if (midl === id) {
//             res = storage[id - 1];
//         } else {
//             kon = midl
//         }
//     }
//     return res;
// }

// console.log(binSearch(storage, id)); 