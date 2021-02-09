const db = require('../database/dbConfig.js')

const find = () => {
    return db('users').select('id', 'username', 'password')
}

const findBy = () => {
    return db('users').insert(user)
}

const add = async (user) => {
    const [id] = await db('users').insert(user)
    return(findById(id))
}

const findById = (id) => {
    return db('users')
        .where({ id })
        .first()
}

const remove = () => {
    return db('users')
        .where('id', id)
        .del()
}

module.exports = {
    add,
    find,
    findBy,
    findById,
    remove
}
