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
        validator: function validateEmail(email) {
          var re = /\S+@\S+\.\S+/;
          return re.test(email);
        },
        message: 'Email invalid'
      },
      {
        validator: function () {
          return new Promise((res, rej) => {
            User.findOne({
                email: this.email,
                _id: {
                  $ne: this._id
                }
              })
              .then(data => {
                if (data) {
                  res(false)
                  throw 'E'
                } else {
                  res(true)
                }
              })
              .catch(err => {
                res(false)
              })
          })
        },
        message: 'Email alredy used'
      }
    ],
    required: [true, 'Email cannot be empty'],
  },
  password: {
    type: String,
    required: [true, 'Password cannot be empty'],
    minlength: [8, 'Password must have minimal 8 character']
  },
  role: {
    type: String,
    default: "pembeli"
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