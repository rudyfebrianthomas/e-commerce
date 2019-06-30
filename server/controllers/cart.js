const Cart = require('../models/cart')

class ControllerProduct{
    static findAll(req, res, next){
        Cart
        .find({})
        .then(resp => {

        })
        .catch(err => {
            next(err)
        })
    }
    static findAOne(req, res, next){
        Cart
        .findById(req.params.id)
        .then(resp => {

        })
        .catch(err => {
            next(err)
        })
    }
    static create(req, res, next){
        let data = {
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
            description: req.body.description,
            image: req.file.cloudStoragePublicUrl,
            ownerId: req.decoded.id
        }
        Cart
        .create(data)
        .then(resp => {

        })
        .catch(err => {
            next(err)
        })
    }
    static patch(req, res, next){
        let data = {
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
            description: req.body.description,
            image: req.file.cloudStoragePublicUrl,
            ownerId: req.decoded.id
        }
        Cart
        .findByIdAndUpdate(req.params.id, data)
        .then(resp => {

        })
        .catch(err => {
            next(err)
        })
    }
    static delete(req, res, next){
        Cart
        .findByIdAndDelete(req.params.id)
        .then(resp => {

        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = ControllerProduct