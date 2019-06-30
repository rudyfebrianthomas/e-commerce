const Product = require('../models/product')

class ControllerProduct{
    static findAll(req, res, next){
        Product
        .find({})
        .then(resp => {

        })
        .catch(err => {
            next(err)
        })
    }
    static findAOne(req, res, next){
        Product
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
        Product
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
        Product
        .findByIdAndUpdate(req.params.id, data)
        .then(resp => {

        })
        .catch(err => {
            next(err)
        })
    }
    static delete(req, res, next){
        Product
        .findByIdAndDelete(req.params.id)
        .then(resp => {

        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = ControllerProduct