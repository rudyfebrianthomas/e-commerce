const express = require('express')
const router = express.Router()
const user = require('./user')

router.get('/', (req, res, next) => {
    res.status(200).json({
        msg: "You are connected to router"
    })
})
router.use('/users', user)

module.exports = router