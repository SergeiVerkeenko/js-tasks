class Response {
    buildResponse(res, status, body) {
        res.status(status).send(body)
    }

}

module.exports = { Response }