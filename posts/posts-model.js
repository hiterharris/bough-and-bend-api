const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove
};

function add(post) {
  return db('posts').insert(post)
}

function find() {
  return db('posts').select('id', 'date', 'title', 'content');
}

function findBy(filter) {
  return db('posts').where(filter);
}

async function add(post) {
  const [id] = await db('posts').insert(post);

  return findById(id);
}

function findById(id) {
  return db('posts')
    .where({ id })
    .first();
}

function remove(id) {
  return db('posts')
    .where('id', id)
    .del();
}
