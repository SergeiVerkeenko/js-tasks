const express = require('express')
const { createEnviroment, getEnviroment, getEnviromentId, updataEnviroment } = require('../services/enviroment.services')
const route = express.Router()

route.get('/', async (req, res) => {
    try {
        const data = await getEnviroment()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error.message)

    }
})

route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getEnviromentId(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

route.post('/', async (req, res) => {
    try {
        const { label, category, priority } = req.body
        const data = await createEnviroment(label, category, priority)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

route.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { label, category, priority } = req.body
        const data = await updataEnviroment(id, label, category, priority)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = route