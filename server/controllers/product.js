const Product = require('../models/product')

class ControllerProduct {
    static findAll(req, res, next) {
        Product
            .find({})
            .populate('userId')
            .then(resp => {
                if (resp.length !== 0) {
                    res.status(200).json(resp)
                } else {
                    throw ({
                        status: 500,
                        message: 'No products found'
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }
    static findOne(req, res, next) {
        Product
            .findById(req.params.id)
            .populate('userId')
            .then(resp => {
                if (resp) {
                    res.status(200).json(resp)
                } else {
                    throw ({
                        status: 404,
                        message: 'Product not found'
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }
    static create(req, res, next) {
        let data = {
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
            description: req.body.description,
            image: req.file.cloudStoragePublicUrl,
            ownerId: req.decoded.id
        }
        Product
            .create(data)
            .then(resp => {
                res.status(201).json(resp)
            })
            .catch(err => {
                next(err)
            })
    }
    static patch(req, res, next) {
        Product
            .findById(req.params.id)
            .then(resp => {
                if (resp) {
                    let data = ''
                    if (req.file) {
                        data = {
                            name: req.body.name || resp.name,
                            price: req.body.price || resp.price,
                            stock: req.body.stock || resp.stock,
                            description: req.body.description || resp.description,
                            image: req.file.cloudStoragePublicUrl || resp.image,
                        }
                    } else {
                        data = {
                            name: req.body.name || resp.name,
                            price: req.body.price || resp.price,
                            stock: req.body.stock || resp.stock,
                            description: req.body.description || resp.description,
                            image: req.body.image || resp.image,
                        }
                    }
                    return Product.findByIdAndUpdate(req.params.id, data, {
                        new: true
                    })
                } else {
                    throw ({
                        status: 404,
                        message: 'Product not found'
                    })
                }
            })
            .then(resp => {
                res.status(200).json(resp)
            })
            .catch(err => {
                next(err)
            })
    }
    static delete(req, res, next) {
        Product
            .findByIdAndDelete(req.params.id)
            .then(resp => {
                if (resp) {
                    res.status(200).json(resp)
                } else {
                    throw ({
                        status: 404,
                        message: 'Product not found'
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = ControllerProduct