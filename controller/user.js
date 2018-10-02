const User = require('../models/user')

module.exports = {
  new: (req, res) => {
    res.send('this is our user/new using get request')
  },
  show: (req, res) => {
    res.send('this is our user/show using get request')
  },
  create: (req, res) => {
    res.send('this is our user using post request')
  }
}
