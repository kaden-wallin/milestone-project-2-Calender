//DEPENDENCIES
const events = require('express').Router()
const db = require('../models')
const { Event } = db

//FIND ALL EVENTS
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll()
        res.status(200).json(foundEvents)
    }
    catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

//FIND A SPECIFIC EVENT
events.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: { event_ID: req.params.id }
        })
        res.status(200).json(foundEvent)
    } 
    catch (error) {
        res.status(500).json(error)
    }
})

//CREATE AN EVENT
events.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully added a new event to the calendar',
            data: newEvent
        })
    } 
    catch(err) {
        res.status(500).json(err)
    }
})

//UPDATE AN EVENT
events.put('/:id', async (req, res) => {
    try {
        const updateEvent = await Event.update(req.body, {
            where: {
                event_ID: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updateEvent} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//DELETE AN EVENT
events.delete('/:id', async (req, res) => {
    try {
        const deletedEvents = await Event.destroy({
            where: {
                event_ID: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvents} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


//EXPORT
module.exports = events