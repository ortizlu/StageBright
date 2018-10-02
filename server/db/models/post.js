const mongoose = require('mongoose')

// define a schema where the field-name is the key in the object passed in
// as an argument to mongoose.Schema, and the object values are the data type of that field
const PostSchema = new mongoose.Schema({
  title: String,
  url: String,
  description: String,
  time: { type: Date, default: Date.now }
})

// builds a model from the schema, and attaches it to our mongoose instance.
// a model is used to query and change data in the database

mongoose.model('Post', PostSchema)

module.exports = mongoose
