// DEPENDENCIES
const { Sequelize } = require('sequelize')
const express = require('express')
const app = express()
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

// LISTEN
app.listen(port, () => {
    console.log(`🎸 Rockin' on port: ${port}`)
})