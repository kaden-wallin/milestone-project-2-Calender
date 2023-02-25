// DEPENDENCIES
require('pg')
const config = require('./config/config')
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const { Sequelize } = require('sequelize')
const port = process.env.PORT || 4002;

// CONFIGURATION / MIDDLEWARE
app.use(cors({
    origin: "https://milestone-project-2-calender-updated-p5n89iklt.vercel.app/"
}))
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

//SERVER STATIC RENDERING
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../build/index.html"));
    console.log(path.join(__dirname, "../build/index.html"))
   });

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