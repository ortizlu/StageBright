const mongoose = require('mongoose')
// bcrypt is used for hashing passwords
const bcrypt = require('bcrypt-nodejs')

const User = mongoose.Schema({
  email: String,
  password: String
})

//NOTE: how does the application know to look in the config directory?
// used for encrypting password and returning the password with Salt iteration of 8
User.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

// used for comparing a valid password? to the password inputted by the person?????????
User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password)
}

module.exports = mongoose.model('User', User)
