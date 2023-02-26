//DEPENDENCIES
const friends = require('express').Router()
const db = require('../models')
const { Friend } = db

//FIND ALL FRIENDS
friends.get('/', async (req, res) => {
    try {
        const foundFriends = await Friend.findAll()
        res.status(200).json(foundFriends)
    }
    catch (error) {
        res.status(500).json(error)
    }
})

//FIND A SPECIFIC FRIEND
friends.get('/:id', async (req, res) => {
    try {
        const foundFriend = await Friend.findOne({
            where: { friend_ID: req.params.id }
        })
        res.status(200).json(foundFriend)
    }
    catch (error) {
        res.status(500).json(error)
    }
})

//ADD A FRIEND
friends.post('/', async (req, res) => {
    try {
        const newFriend = await Friend.create(req.body)
        res.status(200).json({
            message: `Successfully befriended ${newFriend}`,
            data: newFriend
        })
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//DELETE A FRIEND
friends.delete('/:id', async (req, res) => {
    try {
        const deletedFriends = await Friend.destroy({
            where: {
                friend_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully removed ${deletedFriends} friend(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})


//EXPORT
module.exports = friends