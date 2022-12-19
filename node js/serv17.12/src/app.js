const express = require('express');
const bodyParse = require('body-parser')
const Controller = require('./controller/enviroment.controller')

const app = express();
const controller = new Controller;
app.use(bodyParse.json());

app.use('/enviroment', controller.route)

app.use((error, req, res, next) => {
    res.status(500).send(error.message);
})

module.exports = app