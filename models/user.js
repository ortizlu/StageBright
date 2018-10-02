const mongoose = require('../db/connection')
const Schema = mongoose.Schema
var bcrypt = require('bcrypt-nodejs')

const User = new Schema({
  email: String,
  password: String,
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
})

User.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', User)
