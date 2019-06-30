const Product = require('../models/product')

module.exports = function (req, res, next) {
    Product.findById({
            _id: req.params.id
        })
        .then(data => {
            if (data) {
                if (req.decoded.id == String(data.ownerId)) {
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
                    message: "Product not found"
                })
            }
        })
        .catch(next)
}