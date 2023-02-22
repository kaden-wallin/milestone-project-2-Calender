//DEPENDENCIES
const users = require('express').Router()
const db = require('../src/models')
const { User } = db

//CREATE AN ACCOUNT
users.post('/register', async (req, res) => {
    try {
        let email = req.body.email;
        let password = req.body.password
        if (req.body.email === '') { req.body.email = undefined}
        if (req.body.password === '') { req.body.password = undefined}
        db.User.create(req.body)
            .then(() =>{
                res.redirect('/calender')
            })
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