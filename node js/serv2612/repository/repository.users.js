const { pool } = require("../src/DB")

async function getUsersDB() {
    const client = await pool.connect()

    const sql = 'SELECT users.id,users.name, users.surname, users_info.birth, users_info.city, users_info.age   FROM users JOIN users_info ON users.info_id =users_info.id '
    const data = (await client.query(sql)).rows
    return data
}
async function getUsersByIdDB(id) {
    const client = await pool.connect()

    const sql = 'SELECT users.id,users.name, users.surname, users_info.birth, users_info.city, users_info.age   FROM users JOIN users_info ON users.info_id =users_info.id WHERE users.id = $1'
    const data = (await client.query(sql, [id])).rows
    return data
}
async function createUsersByIdDB(name, surname, birth, city, age) {
    const client = await pool.connect()
    try {
        await client.query('BEGIN');

        const sql = 'INSERT INTO users_info(birth, city, age) VALUES ($1,$2,$3) RETURNING *';
        const data = (await client.query(sql, [birth, city, age])).rows[0]
        const sql2 = 'INSERT INTO users(name, surname,info_id) VALUES ($1,$2,$3)';
        (await client.query(sql2, [name, surname, data.id]))

        const sql3 = 'SELECT users.id,users.name, users.surname, users_info.birth, users_info.city, users_info.age   FROM users JOIN users_info ON users.info_id =users_info.id';
        const data2 = (await client.query(sql3)).rows
        await client.query('COMMIT');

        return data2
    } catch (error) {
        await client.query('ROLLBACK');
        console.log(`createUsersByIdDB ${error.message}`);
        return [];
    }

}

async function updateUsersDB(info_id, name, surname, birth, city, age) {
    const client = await pool.connect()
    try {
        await client.query('BEGIN');
        console.log('=');
        const sql = 'UPDATE users_info SET birth=$1, city=$2, age=$3 WHERE id=$4 '
        await client.query(sql, [birth, city, age, info_id])

        const sql2 = 'UPDATE users SET name=$1, surname=$2 WHERE id=$3'
        await client.query(sql2, [name, surname, info_id])

        const sql3 = 'SELECT users.id,users.name, users.surname, users_info.birth, users_info.city, users_info.age  from users JOIN users_info ON users.info_id=users_info.id WHERE users.info_id=$1'
        const data = (await client.query(sql3, [info_id])).rows
        console.log(data);
        await client.query('COMMIT');
        return data
    } catch (error) {
        await client.query('ROLLBACK')
        console.log(`updateUsersDB ${error.message}`);
        return []
    }

}

module.exports = { getUsersDB, getUsersByIdDB, createUsersByIdDB, updateUsersDB }