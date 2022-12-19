const express = require('express');
const { Service } = require('../services/enviroment.services')
const { isValidId, isValidSkills } = require('../../helper/validation')
const { buildResponse } = require('../../helper/buildResponse')

class Controller {
    constructor() {
        this.service = new Service()
        this.route = express.Router();
        this.bindAction()
    }
    async bindAction() {

        this.route.get('/', async (req, res) => {

            try {
                const enviroment = await this.service.getEnviroment()
                buildResponse(res, 200, enviroment)
            } catch (error) {
                buildResponse(res, 500, error.message)
            }
        })

        this.route.get('/:id', isValidId, async (req, res) => {
            try {
                const { id } = req.params;
                console.log(id);
                const enviroment = await this.service.getEnviromentById(id)
                buildResponse(res, 200, enviroment)
            } catch (error) {
                buildResponse(res, 500, error.message)
            }
        })

        this.route.post('/', isValidSkills, async (req, res) => {
            try {
                const { label, category, priority } = req.body
                const enviroment = await this.service.createEnviroment(label, category, priority)
                buildResponse(res, 200, enviroment)
            } catch (error) {
                buildResponse(res, 500, error.message)
            }

        })

        this.route.delete('/:id', isValidId, async (req, res) => {
            try {
                const { id } = req.params
                const enviroment = await this.service.deleteEnviroment(id)
                buildResponse(res, 200, enviroment)
            } catch (error) {
                buildResponse(res, 500, error.message)
            }
        })

        this.route.put('/:id', isValidId, isValidSkills, async (req, res) => {
            try {
                const { id } = req.params
                const { label, category, priority } = req.body;
                const enviroment = await this.service.putEnviroment(id, label, category, priority)
                buildResponse(res, 200, enviroment)
            } catch (error) {
                buildResponse(res, 500, error.message)

            }
        })

        this.route.patch('/:id', isValidId, async (req, res) => {
            try {
                const { id } = req.params;
                const enviroment = await this.service.patchEnviroment(id, req.body)
                buildResponse(res, 200, enviroment)
            } catch (error) {
                buildResponse(res, 500, error.message)
            }
        })
    }
}


module.exports = Controller