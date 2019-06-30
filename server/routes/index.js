const express = require('express')
const router = express.Router()
const user = require('./user')
const product = require('./product')
const cart = require('./cart')
const cartitem = require('./cartitem')

router.get('/', (req, res, next) => {
    res.status(200).json({
        msg: "You are connected to router"
    })
})
router.use('/users', user)
router.use('/products', product)
router.use('/carts', cart)
router.use('/cartitems', cartitem)

module.exports = router