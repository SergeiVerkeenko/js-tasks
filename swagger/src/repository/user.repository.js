const { connect } = require('../db')

async function getAllUserDB() {
    const { students } = await connect()
    return await students.find().toArray()
}

async function createUserDB(name, age, phone, email) {
    const { students } = await connect()
    await students.insertOne({ 'name': name, 'age': age, 'phone': phone, 'email': email })
}

module.exports = { getAllUserDB, createUserDB }