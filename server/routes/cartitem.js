const express = require('express')
const router = express.Router()
const cartitem = require('../controllers/cartitem')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorizationCartItem')

router.use(authentication)
router.get('/', cartitem.findAll)
router.get('/:id', cartitem.findOne)
router.post('/', cartitem.create)
router.patch('/:id', authorization, cartitem.patch)
router.delete('/:id', authorization, cartitem.delete)

module.exports = router