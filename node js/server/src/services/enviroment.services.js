let DB = require('../../storage/enviroment')

function getEnviroment() {
    return DB
}

function getEnviromentById(id) {
    const filtered = DB.filter(el => el.id === id)
    return filtered
}

function createEnviroment(label, category, priority) {
    DB.push({ id: label.toLowerCase(), label, category, priority })
    return DB
}

function updateEnviroments(id, label, category, priority) {
    const res = DB.filter(el => el.id !== id)

    if (res.length === DB.length) throw new Error('Id is not defind in DB')

    res.push({
        id, label, category, priority
    })
    DB = res

    return DB
}

function deleteEnviroment(id) {
    let filtered = DB.filter(el => el.id !== id)
    if (filtered.length === DB.length) throw new Error('Error is not delete')
    DB = filtered

    return DB

}

function patchEnviroment(id, enviromentClient) {
    const filtered = DB.filter(el => el.id === id)
    const merge = { ...filtered[0], ...enviromentClient }
    const wihtoutFiltered = DB.filter(el => el.id !== id)
    if (wihtoutFiltered.length === DB.length) throw new Error('Error patch')
    wihtoutFiltered.push(merge)
    DB = wihtoutFiltered

    return DB
}

module.exports = { getEnviroment, getEnviromentById, createEnviroment, updateEnviroments, deleteEnviroment, patchEnviroment }