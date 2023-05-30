const express = require('express')
const { getAllUser } = require('../service/user.service')

const route = express.Router()

route.get('/', async (req, res) => {
    res.status(200).send(await getAllUser())
})

route.post('/', async function (req, res) {
    const { name, age, phone, email } = req.body
    res.status(200).send(await getAllUser())

})


module.exports = route