// DEPENDENCIES
const { Sequelize } = require('sequelize')
const express = require('express')
const app = express()
const port = process.env.PORT || 4002;

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/backend', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Calender App'
    })
})

//CONTROLLERS
const eventsController = require('./controller/event_controller')
app.use('/events', eventsController)

// LISTEN
app.listen(port, () => {
    console.log(`🎸 Rockin' on port: ${port}`)
})