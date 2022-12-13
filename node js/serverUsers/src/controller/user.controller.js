const express = require('express');
const { Users } = require('../../services/user.services')
const { Validation } = require('../helper/validation')
const { Response } = require('../helper/buildResponse')
const router = express.Router()
const user = new Users();
const validation = new Validation()
const response = new Response()

router.get('/', (req, res) => {
    try {
        const users = user.getUsers();
        response.buildResponse(res, 200, users)
    } catch (error) {
        response.buildResponse(res, 200, error.message)
    }
})

router.get('/:id', validation.isValidId, (req, res) => {
    try {
        const { id } = req.params
        const users = user.getUsersById(id)
        response.buildResponse(res, 200, users)

    } catch (error) {
        response.buildResponse(res, 200, error.message)
    }
})

router.post('/', validation.isValidUser, (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const users = user.addUsers(name, surname, email, pwd)
        response.buildResponse(res, 200, users)
    } catch (error) {
        response.buildResponse(res, 200, error.message)

    }
})

router.put('/:id', validation.isValidId, validation.isValidUser, (req, res) => {
    try {
        const { id } = req.params;
        const { name, surname, email, pwd } = req.body;
        const users = user.updateUsers(id, name, surname, email, pwd)
        response.buildResponse(res, 200, users)
    } catch (error) {
        response.buildResponse(res, 200, error.message)
    }
})

router.patch('/:id', validation.isValidId, (req, res) => {
    try {
        const { id } = req.params;
        const users = user.patchUsers(id, req.body)
        response.buildResponse(res, 200, users)
    } catch (error) {
        response.buildResponse(res, 200, error.message)
    }
})

router.delete('/:id', validation.isValidId, (req, res) => {
    try {
        const { id } = req.params;
        const users = user.deleteUsers(id)
        response.buildResponse(res, 200, users)
    } catch (error) {
        response.buildResponse(res, 200, error.message)
    }
})

module.exports = router;