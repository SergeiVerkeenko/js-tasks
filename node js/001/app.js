const express = require('express');
const { Enviroment } = require('./services/environment.services')
const app = express();

app.get('/', (req, res) => {
    try {
        const environment = new Enviroment()
        res.send(environment.getEnviroment())
    } catch (error) {
        res.send(error.message)
    }

})

app.get('/about', (req, res) => {
    res.send('2')
})
app.get('/contact', (req, res) => {
    res.send('1')
})

app.get('/:id', (req, res) => {
    const { id } = req.params
    const environment = new Enviroment()
    res.send(environment.getEnviromentWithId(id))

})

app.listen(8000, () => {
    console.log(`Server zapus4en 8000`);
})