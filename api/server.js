const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const usersRouter = require('../users/users-router')
const postsRouter = require('../posts/posts-router')

const server = express()

server.use(cors())
server.use(helmet())
server.use(express.json())

server.use('/api/users', usersRouter)
server.use('/api/posts', postsRouter)

server.get('/', (req, res) => {
    res.send('Bough and Bend API')
})

module.exports = server