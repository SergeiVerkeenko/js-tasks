class Validation {
    isValidId(req, res, next) {
        const { id } = req.params
        if (!id) throw new Error('id is invalid')
        if (isNaN(id)) throw new Error('id is invalid')
        next()
    }

    isValidInviroment(req, res, next) {
        const { label, category, priority } = req.body;
        if (!label) throw new Error('label is empty')
        if (!category) throw new Error('category is empty')
        if (!priority) throw new Error('priority is empty')
        next()
    }
}

module.exports = { Validation }