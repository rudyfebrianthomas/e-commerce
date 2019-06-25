const mongoose = require('mongoose')

let Schema = mongoose.Schema

let product = new Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be empty']
    },
    price: {
        type: Number,
        required: [true, 'Price cannot be empty']
    },
    stock: {
        type: Number,
        required: [true, 'Stock cannot be empty']
    },
    description: {
        type: String,
        required: [true, 'Description cannot be empty']
    },
    image: {
        type: String
    },
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: 'UserId'
    }
}, {
    timestamps: true
})

let Product = mongoose.model('Product', product)

module.exports = Product