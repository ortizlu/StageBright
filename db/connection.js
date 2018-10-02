const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/stagebright')
mongoose.Promise = Promise
module.exports = mongoose
