const express = require('express')
const { Enviroment } = require('../services/enviroment.services')
const { Validation } = require('../../helper/validation')
const { Response } = require('../../helper/buildResponse')
const response = new Response()
const validation = new Validation()
const enviroment = new Enviroment()
const route = express.Router()

route.get('/', async (req, res) => {
    try {
        const data = await enviroment.getEnviroment()
        response.buildResponse(res, 200, data)
    } catch (error) {
        response.buildResponse(res, 500, error.message)

    }
})

route.get('/:id', validation.isValidId(), async (req, res) => {
    try {
        const { id } = req.params;
        const data = await enviroment.getEnviromentId(id)
        response.buildResponse(res, 200, data)
    } catch (error) {
        response.buildResponse(res, 500, error.message)
    }
})

route.post('/', validation.isValidInviroment(), async (req, res) => {
    try {
        const { label, category, priority } = req.body
        const data = await enviroment.createEnviroment(label, category, priority)
        response.buildResponse(res, 200, data)
    } catch (error) {
        response.buildResponse(res, 500, error.message)
    }
})

route.put('/:id', validation.isValidId(), validation.isValidInviroment(), async (req, res) => {
    try {
        const { id } = req.params
        const { label, category, priority } = req.body
        const data = await enviroment.updataEnviroment(id, label, category, priority)
        response.buildResponse(res, 200, data)
    } catch (error) {
        response.buildResponse(res, 500, error.message)
    }
})

module.exports = route