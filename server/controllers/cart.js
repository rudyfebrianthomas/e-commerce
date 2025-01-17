const Cart = require('../models/cart')

class ControllerCart {
    static findAll(req, res, next) {
        Cart
            .find({})
            .populate('userId')
            .populate('cartitemId')
            .then(resp => {
                if (resp.length !== 0) {
                    res.status(200).json(resp)
                } else {
                    throw ({
                        status: 404,
                        message: 'Cart not found'
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }
    static findOne(req, res, next) {
        Cart
            .findById(req.params.id)
            .populate('userId')
            .populate('cartitemId')
            .then(resp => {
                if (resp) {
                    res.status(200).json(resp)
                } else {
                    throw ({
                        status: 404,
                        message: 'Cart not found'
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }
    static create(req, res, next) {
        let data = {
            userId: req.decoded.id,
            cartitemId: [],
            status: 'open'
        }
        Cart.findOne({
                userId: req.decoded.id,
                status: 'open'
            })
            .then(resp => {
                if (resp) {
                    res.status(200).json(resp)
                } else {
                    return Cart.create(data)
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
            status: req.body.status
        }
        Cart
            .findByIdAndUpdate(req.params.id, data,{new: true})
            .then(resp => {
                res.status(200).json(resp)
            })
            .catch(err => {
                next(err)
            })
    }
    static delete(req, res, next) {
        Cart
            .findByIdAndDelete(req.params.id)
            .then(resp => {
                res.status(200).json(resp)
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = ControllerCart