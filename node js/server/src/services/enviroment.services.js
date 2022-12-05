const { readFileSync, writeFileSync } = require('fs');

class Enviroment {

    path = "storage/enviroment.json";

    readFile() {
        return JSON.parse(readFileSync(this.path));
    }

    writeFile(DB) {
        writeFileSync(this.path, JSON.stringify(DB), 'utf8');

    }

    getEnviroment() {
        const DB = this.readFile()
        if (!DB.length) throw new Error('JSON is empty')
        return DB
    }

    getEnviromentById(id) {
        const DB = this.readFile()
        if (!DB.length) throw new Error('JSON is empty')

        const filtered = DB.filter(el => el.id === id)
        return filtered
    }

    createEnviroment(label, category, priority) {
        const DB = this.readFile()

        DB.push({ id: label.toLowerCase(), label, category, priority })
        this.writeFile(DB)
        return DB
    }

    updateEnviroments(id, label, category, priority) {
        const DB = this.readFile()

        const res = DB.filter(el => el.id !== id)

        if (res.length === DB.length) throw new Error('Id is not defind in DB')

        res.push({
            id, label, category, priority
        })
        this.writeFile(res)

        return res
    }

    deleteEnviroment(id) {
        const DB = this.readFile()
        let filtered = DB.filter(el => el.id !== id)
        if (filtered.length === DB.length) throw new Error('Error is not delete')
        this.writeFile(filtered)

        return filtered

    }

    patchEnviroment(id, enviromentClient) {
        const DB = this.readFile()
        const filtered = DB.filter(el => el.id === id)
        const merge = { ...filtered[0], ...enviromentClient }
        const wihtoutFiltered = DB.filter(el => el.id !== id)
        if (wihtoutFiltered.length === DB.length) throw new Error('Error patch')
        wihtoutFiltered.push(merge)
        this.writeFile(wihtoutFiltered)

        return wihtoutFiltered
    }
}

module.exports = { Enviroment }