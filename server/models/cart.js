const mongoose = require('mongoose')

let Schema = mongoose.Schema

let cart = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    cartitemId: [{
        type: Schema.Types.ObjectId,
        ref: 'CartItem'
    }],
    status: {
        type: String
    }
}, {
    timestamps: true
})

let Cart = mongoose.model('Cart', cart)

module.exports = Cart