const knex = require('knex')

const knexCongfig = require('../knexfile.js')

module.exports = knex(knexCongfig.development)