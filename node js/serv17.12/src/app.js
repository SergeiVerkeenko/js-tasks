const express = require('express');
const bodyParse = require('body-parser')
const enviroment = require('./controller/enviroment.controller')

const app = express();

app.use(bodyParse.json());

app.use('/enviroment', enviroment)

app.use((error, req, res, next) => {
    res.status(500).send(error.message);
})

module.exports = app