const mongoose = require('mongoose')

let Schema = mongoose.Schema

let cartitem = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number
    },
    totalPrice: {
        type: Number
    }
}, {
    timestamps: true
})

let CartItem = mongoose.model('CartItem', cartitem)

module.exports = CartItem