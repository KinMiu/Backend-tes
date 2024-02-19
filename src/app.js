require('dotenv').config()
const express = require('express')
const mongo = require('./database/mongo')
const Logger = require('./utils/logger')
const cors = require('cors')
const router = require('./routes')
const path = require('path')
const { requestResponse } = require('./utils/index')

mongo.createConnection().then((_) => {
    logger.info(`SUCCESS CONNECTING TO DATABASE MONGODB`)
}).catch((err) => {
    console.error(err)
})

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('statics'))
router.use('/default', (req, res) => {
    res.json({
        msg: 'Welcome to API'
    });
})
app.use(router)
app.use((req, res) => {
    const response = requestResponse.not_found
    res.status(response.code).json(response)
})

module.exports = app