const express = require('express')
const cors = require ('cors')
const db = require('./util/database')
require('dotenv').config()





const server = express()
server.use(express.json())
server.use(cors())








db
 .sync()
    // .sync({force: true})
    // .then(() => seed())
server.listen(4020, () => console.log('Server running on 4020'))