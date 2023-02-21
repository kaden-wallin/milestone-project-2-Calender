//DEPENDENCIES
const users = require('express').Router()
const db = require('../src/models')
const { User } = db

//CREATE AN ACCOUNT
users.post('/login', async (req, res) => {
    try {
        let username = req.body.username;
        let password = req.body.password
        res.send (`Username: ${user_email} Password: ${user_password}`)
        res.status(200).json({
            message: 'Successfully registered',
            data: newAccount
        })
    } 
    catch(err) {
        res.status(500).json(err)
    }
})

//CHECK AN ACCOUNT 

users.get('/email/:id', (req,res) => {
    let verify = getUserEmail(req.params.id);
    res.send(verify);
})

//UPDATE ACCOUNT
users.put('/:id', async (req, res) => {
    try {
        const updatedAccount = await User.update(req.body, {
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedAccount} user(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//DELETE ACCOUNT
users.delete('/:id', async (req, res) => {
    try {
        const deletedAccount = await User.destroy({
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedAccount}`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


//EXPORT
module.exports = users