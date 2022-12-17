const { getEnviromentDB, deleteEnviromentDB, createEnviromentDB, patchEnviromentDB } = require('../repository/enviroment.repository')


async function getEnviroment() {
    const enviroment = await getEnviromentDB()
    if (!enviroment.length) throw new Error('enviroment is error')
    return enviroment
}

async function deleteEnviroment(id) {
    const enviroment = await deleteEnviromentDB(id)
    if (!enviroment.length) throw new Error('enviroment is error')
    return enviroment
}

async function createEnviroment(label, category, priority) {
    const enviroment = await createEnviromentDB(label, category, priority)
    if (!enviroment.length) throw new Error('enviroment is error')
    return enviroment

}

async function patchEnviroment(id, dataFromClient) {
    const enviroment = await patchEnviromentDB(id, dataFromClient)
    if (!enviroment.length) throw new Error('error')
    return enviroment
}

module.exports = { getEnviroment, deleteEnviroment, createEnviroment, patchEnviroment }