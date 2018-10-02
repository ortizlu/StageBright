const mongoose = require('./models/post')
mongoose.Promise = Promise
const mongoUri = 'mongodb://localhost/stagebright'

mongoose
  .connect(mongoUri)
  .then(connection => console.log(`Connection established to db`))
  .catch(connectionError => console.log('Connection failed!', connectionError))

// now, our mongoose instance has a configured connection to our local db, in addition
// to its model configuration
module.exports = mongoose
