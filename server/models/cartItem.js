const mongoose = require('mongoose')
const Product = require('./product')
const Cart = require('./cart')

let Schema = mongoose.Schema

let cartitem = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        min: 1,
        max: 9999,
    },
    totalPrice: {
        type: Number,
        min: 1,
        max: 999999999,
    },
    cartId: {
        type: Schema.Types.ObjectId,
        ref: 'Cart'
    }
}, {
    timestamps: true
})

cartitem.pre('save', function (next) {
    Product.findById(this.productId)
        .then(resp => {
            if (resp) {
                this.totalPrice = resp.price * this.quantity
                return Cart.findOne({
                    cartitemId: {
                        $in: this._id
                    }
                })
            } else {
                throw ({
                    status: 404,
                    message: 'Product not found'
                })
            }
        })
        .then(resp => {
            if (resp) {
                next()
            } else {
                let data = {
                    $push: {
                        cartitemId: this._id
                    }
                }
                return Cart.findByIdAndUpdate(this.cartId, data, {
                    new: true
                })
            }
        })
        .then(resp => {
            next()
        })
        .catch(err => {
            next(err)
        })
})


let CartItem = mongoose.model('CartItem', cartitem)

module.exports = CartItem