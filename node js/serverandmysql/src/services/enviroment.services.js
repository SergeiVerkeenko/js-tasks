const { createEnviromentDB, getEnviromentDB, getEnviromentIdDB, updataEnviromentDB } = require('../repository/enviroment.repository')

async function getEnviroment() {
    const enviroment = await getEnviromentDB()
    if (!enviroment.length) throw new Error('not found')
    return enviroment
}

async function getEnviromentId(id) {
    const enviroment = await getEnviromentIdDB(id)
    if (!enviroment.length) throw new Error('not found')
    return enviroment
}

async function createEnviroment(label, category, priority) {
    const enviroment = await createEnviromentDB(label, category, priority)
    if (!enviroment.length) throw new Error('not found')
    return enviroment
}

async function updataEnviroment(id, label, category, priority) {
    const enviroment = await updataEnviromentDB(id, label, category, priority)
    if (!enviroment.length) throw new Error('not found')
    return enviroment
}


module.exports = { createEnviroment, getEnviroment, getEnviromentId, updataEnviroment }