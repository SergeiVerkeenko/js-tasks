const express = require('express');

const enviroment = require('../src/controller/enviroment.controller')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())

app.use('/enviroment', enviroment)

app.use((error, req, res, next) => res.status(500).send(error.message))

module.exports = app