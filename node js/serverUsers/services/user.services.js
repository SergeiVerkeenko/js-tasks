const fs = require('fs');

class Users {
    constructor() {
        this.path = 'storage/user.json'

    }

    getUsers() {
        const users = JSON.parse(fs.readFileSync(this.path));
        return users
    }

    getUsersById(id) {
        const users = JSON.parse(fs.readFileSync(this.path))
        const filtered = users.filter(el => el.id == id)
        return filtered;
    }

    updateUsers(id, name, surname, email, pwd) {
        const users = JSON.parse(fs.readFileSync(this.path))
        const filtered = users.filter(el => el.id != id)
        if (users.length == filtered.length) throw new Error('ERORR')
        filtered.push({ id, name, surname, email, pwd })
        fs.writeFileSync(this.path, JSON.stringify(filtered), 'utf8');
        return filtered
    }

    deleteUsers(id) {
        const users = JSON.parse(fs.readFileSync(this.path))
        const filtered = users.filter(el => el.id != id)
        if (filtered.length == users.length) throw new Error('Error')
        fs.writeFileSync(this.path, JSON.stringify(filtered), 'utf8');
        return filtered
    }

    addUsers(name, surname, email, pwd) {
        const users = JSON.parse(fs.readFileSync(this.path))
        const filtered = users.filter(el => el.email !== email)
        if (filtered.length != users.length) throw new Error('Error')
        filtered.push({ name, surname, email, pwd })
        fs.writeFileSync(this.path, JSON.stringify(filtered), 'utf8')
        return filtered
    }

    patchUsers(id, bodyClient) {
        const users = JSON.parse(fs.readFileSync(this.path))
        const filtered = users.filter(el => el.id == id)
        const merge = { ...filtered[0], ...bodyClient }
        const withoutFiltered = users.filter(el => el.id != id)
        if (withoutFiltered.length == users.length) throw new Error('Error')
        withoutFiltered.push(merge)
        fs.writeFileSync(this.path, JSON.stringify(withoutFiltered), 'utf8')
        return withoutFiltered
    }


}

module.exports = { Users };