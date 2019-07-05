const mongoose = require('mongoose')
const {encrypt} = require('../helpers/bcrypt')

let Schema = mongoose.Schema

let user = new Schema({
  userName: {
    type: String,
    required: [true, 'User name cannot be empty']
  },
  email: {
        type: String,
        validate: [{
            validator: function (input) {
                var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return input.match(emailFormat)
            },
            message: props => `${props.value} invalid email`
        }, {
            validator: function (input) {
                return mongoose.model('User', user)
                    .findOne({ email: input })
                    .then(data => { if (data) return false })
            },
            message: 'Email is already used'
        }],
        required: [true, 'Email cannot be empty']
    },
  password: {
    type: String,
    required: [true, 'Password cannot be empty'],
    minlength: [6, 'Password must have minimal 6 character']
  },
  role: {
    type: String,
    required: [true, 'Please choose a role']
  }
}, {
  timestamps: true
})

user.pre('save', function (next) {
  this.password = encrypt(this.password)
  next()
})

let User = mongoose.model('User', user)

module.exports = User