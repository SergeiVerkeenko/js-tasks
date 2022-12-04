const express = require('express');
const bodyParser = require("body-parser");
const { getEnviroment, getEnviromentById, createEnviroment, updateEnviroments, deleteEnviroment, patchEnviroment } = require('./services/enviroment.services')

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    try {
        const enviroment = getEnviroment()
        res.status(200).send(enviroment)
    } catch (error) {
        res.status(500).send(`Error GET /  ${error.message}`)
    }
})

app.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const enviromentById = getEnviromentById(id);
        res.status(200).send(enviromentById)
    } catch (error) {
        res.status(500).send(`Error GET /:id ${error.message}`)
    }
})

app.post('/', (req, res) => {
    try {
        const { label, category, priority } = req.body
        const enviroments = createEnviroment(label, category, priority)
        res.status(200).send(enviroments)
    } catch (error) {
        res.status(500).send(`Error POST / ${error.message}`)
    }
})

app.put('/:id', (req, res) => {
    try {
        const { id } = req.params
        const { label, category, priority } = req.body
        const updateEnviroment = updateEnviroments(id, label, category, priority)
        res.send(updateEnviroment)
    } catch (error) {
        res.status(500).send(`Error PUT /:id ${error.message}`)
    }
})

app.delete('/:id', (req, res) => {
    try {
        const { id } = req.params
        const enviroment = deleteEnviroment(id)
        res.send(enviroment)
    } catch (error) {
        res.status(500).send(`Error DELETE /:id  ${error.message}`)
    }
})

app.patch('/:id', (req, res) => {
    const { id } = req.params
    const enviroment = patchEnviroment(id, req.body)
    res.send(enviroment)

})

module.exports = app