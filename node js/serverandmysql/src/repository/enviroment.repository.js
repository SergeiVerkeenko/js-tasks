const pool = require('../db')

class EnviromentDB {


    async getEnviromentDB() {
        const client = await pool.connect()
        const sql = ' SELECT * FROM enviroment'
        const data = (await client.query(sql)).rows
        return data
    }

    async createEnviromentDB(label, category, priority) {
        const client = await pool.connect()
        const sql = 'INSERT INTO enviroment(label, category, priority) VALUES ($1, $2, $3) RETURNING *';
        const data = (await client.query(sql, [label, category, priority])).rows
        return data
    }

    async getEnviromentIdDB(id) {
        const client = await pool.connect()
        const sql = `SELECT * FROM enviroment WHERE id=$1`
        const data = (await client.query(sql, [id])).rows
        return data
    }

    async updataEnviromentDB(id, label, category, priority) {
        const client = await pool.connect()
        const sql = 'UPDATE enviroment SET label=$1, category=$2, priority=$3 WHERE id=$4 RETURNING *'
        const data = (await client.query(sql, [label, category, priority, id])).rows
        return data
    }
}

module.exports = { EnviromentDB }