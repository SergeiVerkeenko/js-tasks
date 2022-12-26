const { getUsersDB, getUsersByIdDB, updateUsersDB, createUsersByIdDB } = require('../repository/repository.users')


async function getUsers() {
    const users = await getUsersDB()
    if (!users.length) throw new Error('DB is empty')
    return users
}

async function getUsersById(id) {
    const users = await getUsersByIdDB(id)
    // if (!users.length) throw new Error('DB is empty')
    return users
}

async function createUsersById(name, surname, birth, city, age) {
    const users = await createUsersByIdDB(name, surname, birth, city, age)
    if (!users.length) throw new Error('DB is empty GGG')
    return users
}

async function updateUsers(info_id, name, surname, birth, city, age) {
    const users = await updateUsersDB(info_id, name, surname, birth, city, age)
    if (!users.length) throw new Error('DB is empty GGG')
    return users

}

module.exports = { getUsers, getUsersById, createUsersById, updateUsers }