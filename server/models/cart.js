const mongoose = require('mongoose')

let Schema = mongoose.Schema

let cart = new Schema({
    stock: {
        type: Number,
        required: [true, "Stock cannot be empty"]
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
}, {
    timestamps: true
})

let Cart = mongoose.model('cart', cart)

module.exports = Cart