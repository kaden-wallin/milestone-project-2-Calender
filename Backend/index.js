// DEPENDENCIES
require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const { Sequelize } = require('sequelize')
const port = process.env.PORT || 4002;
const config = require('./config/config')
require('pg')

// CONFIGURATION / MIDDLEWARE
app.use(cors({
    origin: 'milestone-project-2-calender-fzzny2fo5-mile-stone-2-team.vercel.app',
  methods: 'GET,PUT,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
}))

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//app.use(express.static(path.join(__dirname, "../build")));

//CONTROLLERS
const eventsController = require('./controller/event_controller')
app.use('/api/events', eventsController)

const friendsController = require('./controller/friend_controller')
app.use('/api/friends', friendsController)

const usersController = require('./controller/user_controller')
app.use('/api/users', usersController)

const reportsController = require('./controller/report_controller')
app.use('/api/reports', reportsController)

//SERVER STATIC RENDERING
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "../build/index.html"));
//     console.log(path.join(__dirname, "../build/index.html"))
//    });

// LISTEN
app.listen(port, () => {
    console.log(`🎸 Rockin' on port: ${port}`)
})