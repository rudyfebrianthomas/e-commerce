const CartItem = require('../models/cartItem')

class ControllerCartItem {
    static findAll(req, res, next) {
        CartItem
            .find({})
            .populate('productId')
            .then(resp => {
                if (resp.length !== 0) {
                    res.status(200).json(resp)
                } else {
                    throw ({
                        status: 404,
                        message: 'Cart item not found'
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }
    static findOne(req, res, next) {
        CartItem
            .findById(req.params.id)
            .populate('productId')
            .then(resp => {
                if (resp) {
                    res.status(200).json(resp)
                } else {
                    throw ({
                        status: 404,
                        message: 'Cart item not found'
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }
    static create(req, res, next) {
        let data = {
            productId: req.body.productId,
            quantity: req.body.quantity,
            totalPrice: 1,
            cartId: req.body.cartId,
        }
        CartItem.findOne({
                productId: req.body.productId,
                cartId: req.body.cartId
            })
            .then(resp => {
                if (resp) {
                    resp.quantity = resp.quantity + Number(req.body.quantity)
                    resp.save()
                    res.status(200).json(resp)
                } else {
                    return CartItem.create(data)
                }
            })
            .then(resp => {
                res.status(201).json(resp)
            })
            .catch(err => {
                next(err)
            })
    }

    static patch(req, res, next) {
        let data = {
            quantity: req.body.quantity,
        }
        CartItem
            .findOneAndUpdate({
                _id: req.params.id
            }, data)
            .then(resp => {
                res.status(200).json(resp)
            })
            .catch(err => {
                next(err)
            })
    }
    static delete(req, res, next) {
        CartItem
            .findByIdAndDelete(req.params.id)
            .then(resp => {
                res.status(200).json(resp)
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = ControllerCartItem