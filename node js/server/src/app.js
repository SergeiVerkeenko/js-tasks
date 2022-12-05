const express = require('express');
const bodyParser = require("body-parser");
const { Enviroment } = require('./services/enviroment.services')

class App {
    constructor() {
        this.app = express();
        this.middlewar();
        this.routes();
        this.enviroment = new Enviroment()
    }
    middlewar() {

        this.app.use(bodyParser.json());
    }

    routes() {

        this.app.get('/', (req, res) => {
            try {
                res.status(200).send(this.enviroment.getEnviroment())
            } catch (error) {
                res.status(500).send(`Error GET /  ${error.message}`)
            }
        })

        this.app.get('/:id', (req, res) => {
            try {
                const { id } = req.params;
                res.status(200).send(this.enviroment.getEnviromentById(id))
            } catch (error) {
                res.status(500).send(`Error GET /:id ${error.message}`)
            }
        })

        this.app.post('/', (req, res) => {
            try {
                const { label, category, priority } = req.body
                res.status(200).send(this.enviroment.createEnviroment(label, category, priority))
            } catch (error) {
                res.status(500).send(`Error POST / ${error.message}`)
            }
        })

        this.app.put('/:id', (req, res) => {
            try {
                const { id } = req.params
                const { label, category, priority } = req.body
                res.send(this.enviroment.updateEnviroments(id, label, category, priority))
            } catch (error) {
                res.status(500).send(`Error PUT /:id ${error.message}`)
            }
        })

        this.app.delete('/:id', (req, res) => {
            try {
                const { id } = req.params
                res.send(this.enviroment.deleteEnviroment(id))
            } catch (error) {
                res.status(500).send(`Error DELETE /:id  ${error.message}`)
            }
        })

        this.app.patch('/:id', (req, res) => {
            try {
                const { id } = req.params
                res.send(this.enviroment.patchEnviroment(id, req.body))

            } catch (error) {
                res.status(500).send(`Error PATCH /:id  ${error.message}`)

            }
        })
    }
}

module.exports = App