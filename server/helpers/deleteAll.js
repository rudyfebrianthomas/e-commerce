const cart = require('../models/cart');
const product = require('../models/product');
const user = require('../models/user');

module.exports = function () {
    if (process.env.NODE_ENV === 'test') {
        user
            .deleteMany({})
            .then(function () {
                console.log('Players collection cleared!');
            })
            .catch(function (err) {
                console.log(err);
            });
        product
            .deleteMany({})
            .then(function () {
                console.log('Players collection cleared!');
            })
            .catch(function (err) {
                console.log(err);
            });
        cart
            .deleteMany({})
            .then(function () {
                console.log('Players collection cleared!');
            })
            .catch(function (err) {
                console.log(err);
            });
    }
}