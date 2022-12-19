const { EnviromentDB } = require('../repository/enviroment.repository')
const ExceptionType = require('../../exceptions/exceptions.type')
const enviromentDB = new EnviromentDB();

class Service {

    async getEnviroment() {
        const enviroment = await enviromentDB.getEnviromentDB()
        if (!enviroment.length) throw new Error(ExceptionType.ENVIROMENT_NOT_FOUND_GET)
        return enviroment
    }

    async getEnviromentById(id) {
        const enviroment = await enviromentDB.getEnviromentByIdDB(id)
        if (!enviroment.length) throw new Error(ExceptionType.ENVIROMENT_NOT_FOUND_GETBYID)
        return enviroment

    }

    async deleteEnviroment(id) {
        const enviroment = await enviromentDB.deleteEnviromentDB(id)
        if (!enviroment.length) throw new Error(ExceptionType.ENVIROMENT_NOT_FOUND_DELETE)
        return enviroment
    }

    async createEnviroment(label, category, priority) {
        const enviroment = await enviromentDB.createEnviromentDB(label, category, priority)
        if (!enviroment.length) throw new Error(ExceptionType.ENVIROMENT_NOT_FOUND_POST)
        return enviroment

    }

    async putEnviroment(id, label, category, priority) {
        const enviroment = await enviromentDB.putEnviromentDB(id, label, category, priority)
        console.log(enviroment);
        if (!enviroment.length) throw new Error(ExceptionType.ENVIROMENT_NOT_FOUND_PUT)
        return enviroment
    }

    async patchEnviroment(id, dataFromClient) {
        const enviroment = await enviromentDB.patchEnviromentDB(id, dataFromClient)
        if (!enviroment.length) throw new Error(ExceptionType.ENVIROMENT_NOT_FOUND_PUTCH)
        return enviroment
    }

}

module.exports = { Service }