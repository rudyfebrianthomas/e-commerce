const express = require('express')
const router = express.Router()
const user = require('../controllers/user')
const authentication = require('../middlewares/authentication')

router.get('/userdata', authentication, (req, res, next) => {
    res.status(200).json(req.decoded)
})

router.post('/signup', user.register)
router.post('/signin', user.login)
router.post('/googlesignin', user.googlesignin)

module.exports = router