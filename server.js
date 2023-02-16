// DEPENDENCIES
const express = require('express')
const cors = require("cors");
const app = express()
const path = require('path')
const { Sequelize } = require('sequelize')
const port = process.env.PORT || 4002;

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")));

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


//serverside static rendering
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
    console.log(path.join(__dirname, "public", "index.html"))
   });

// ROOT
app.get('/backend', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Calender App'
    })
})

//CONTROLLERS
const eventsController = require('./controller/event_controller')
app.use('/api/events', eventsController)

const friendsController = require('./controller/friend_controller')
app.use('/api/friends', friendsController)

const usersController = require('./controller/user_controller')
app.use('/api/users', usersController)

const reportsController = require('./controller/report_controller')
app.use('/api/reports', reportsController)

// LISTEN
app.listen(port, () => {
    console.log(`🎸 Rockin' on port: ${port}`)
})