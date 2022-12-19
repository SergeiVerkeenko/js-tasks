const { pool } = require('../DB')

class EnviromentDB {
    async getEnviromentDB() {
        const client = await pool.connect()
        const sql = 'SELECT * FROM enviroment'
        const data = (await client.query(sql)).rows
        return data
    }

    async getEnviromentByIdDB(id) {
        const client = await pool.connect()
        const sql = 'SELECT * FROM enviroment WHERE id=$1'
        const data = (await client.query(sql, [id])).rows
        return data

    }

    async deleteEnviromentDB(id) {
        const client = await pool.connect()
        const sql = 'DELETE FROM enviroment WHERE id=$1 RETURNING *'
        const data = (await client.query(sql, [id])).rows
        return data
    }

    async createEnviromentDB(label, category, priority) {
        const client = await pool.connect()
        const sql = 'INSERT INTO enviroment(label, category, priority) VALUES ($1,$2,$3) RETURNING *'
        const data = (await client.query(sql, [label, category, priority])).rows
        return data
    }

    async putEnviromentDB(id, label, category, priority) {
        const client = await pool.connect()
        const sql = 'UPDATE enviroment SET label=$1, category=$2, priority=$3 WHERE id=$4 RETURNING *'
        const data = (await client.query(sql, [label, category, priority, id])).rows
        return data
    }

    async patchEnviromentDB(id, dataFromClient) {
        const client = await pool.connect();
        const sql = 'SELECT * FROM enviroment WHERE id=$1'
        const data = (await client.query(sql, [id])).rows[0]
        const mergeData = { ...data, ...dataFromClient }
        console.log(mergeData);
        const sql2 = 'UPDATE enviroment SET label = $1, category = $2,priority=$3 WHERE id=$4 RETURNING *'
        const data2 = (await client.query(sql2, [mergeData.label, mergeData.category, mergeData.priority, id])).rows
        return data2

    }

}



module.exports = { EnviromentDB }