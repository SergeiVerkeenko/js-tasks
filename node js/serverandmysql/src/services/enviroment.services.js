const { EnviromentDB } = require('../repository/enviroment.repository')

const enviromentDB = new EnviromentDB()

class Enviroment {
    
    async getEnviroment() {
        const enviroment = await enviromentDB.getEnviromentDB()
        if (!enviroment.length) throw new Error('not found')
        return enviroment
    }

    async getEnviromentId(id) {
        const enviroment = await enviromentDB.getEnviromentIdDB(id)
        if (!enviroment.length) throw new Error('not found')
        return enviroment
    }

    async createEnviroment(label, category, priority) {
        const enviroment = await enviromentDB.createEnviromentDB(label, category, priority)
        if (!enviroment.length) throw new Error('not found')
        return enviroment
    }

    async updataEnviroment(id, label, category, priority) {
        const enviroment = await enviromentDB.updataEnviromentDB(id, label, category, priority)
        if (!enviroment.length) throw new Error('not found')
        return enviroment
    }

}



module.exports = { Enviroment }