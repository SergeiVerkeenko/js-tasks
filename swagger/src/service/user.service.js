const { getAllUserDB, createUserDB } = require('../repository/user.repository')

async function getAllUser() {
    return await getAllUserDB()
}

async function createUser(){

}

module.exports = { getAllUser,createUser }