const express = require('express');
const { getEnviroment, getEnviromentById } = require('./services/enviroment.services')
const app = express();

app.get('/:id', (req, res) => {
    const { id } = req.params
    let result = getEnviromentById(id)
    res.send(result)
})

app.post('/', (req, res) => {
    res.send('hey POST')
})

app.listen(8000, () => console.log('Servak ready'))








