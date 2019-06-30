const CartItem = require('../models/cartItem')

module.exports = function (req, res, next) {
    CartItem.findById({
            _id: req.params.id
        })
        .then(data => {
            if (data) {
                if (req.body.cartId == data.cartId) {
                    next()
                } else {
                    throw ({
                        status: 401,
                        message: "Unauthorized"
                    })
                }
            } else {
                throw({
                    status: 404,
                    message: "Cart item not found"
                })
            }
        })
        .catch(next)
}