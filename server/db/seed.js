const mongoose = require('../db/connection')
const seeds = require('./seedData')

const Post = mongoose.model('Post')

mongoose.Promise = Promise

Post.remove({}).then(_ => {
  console.log('Dropped the DB')
  Post.collection.insert(seeds).then(seededEntries => {
    console.log(seededEntries)
    mongoose.connection.close()
  })
})
