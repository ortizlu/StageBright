const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Post = new Schema({
  title: String,
  description: String,
  mediatype: String,
  url: {
    type: String,
    required: true
  },
  likes: Number,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Post', Post)
