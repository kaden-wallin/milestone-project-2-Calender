// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const port = process.env.PORT || 4002;

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION
const sequelize = new Sequelize({
    storage: process.env.PG_URI,
    dialect: 'postgres',
    username: 'postgres',
    password: process.env.PG_PASSWORD
  })

try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}



// ROOT
app.get('/backend', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Calender App'
    })
})

//CONTROLLERS
const eventsController = require('./controller/event_controller')
app.use('/events', eventsController)

const friendsController = require('./controller/friend_controller')
app.use('/friends', friendsController)

const usersController = require('./controller/user_controller')
app.use('/users', usersController)

const reportsController = require('./controller/report_controller')
app.use('/reports', reportsController)

// LISTEN
app.listen(port, () => {
    console.log(`🎸 Rockin' on port: ${port}`)
})