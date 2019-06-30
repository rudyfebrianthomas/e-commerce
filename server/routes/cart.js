const express = require('express')
const router = express.Router()
const cart = require('../controllers/cart')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorizationCart')

router.use(authentication)
router.get('/', cart.findAll)
router.get('/:id', cart.findOne)
router.post('/', cart.create)
router.patch('/:id', authorization, cart.patch)
router.delete('/:id', authorization, cart.delete)

module.exports = router