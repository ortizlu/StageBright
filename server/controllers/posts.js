const express = require('express')
const router = express.Router()

const mongoose = require('../db/connection')
const Post = mongoose.model('Post')

router.get('/', (req, res) => {
  Post.find({}).then(posts => {
    res.json(posts)
  })
})

router.get('/:title', (req, res) => {
  Post.findOne({ title: req.params.title }).then(post => {
    res.json(post)
  })
})

router.post('/', (req, res) => {
  Post.create(req.body).then(post => {
    res.json(post)
  })
})

router.put('/:title', (req, res) => {
  Post.findOneAndUpdate({ title: req.params.title }, req.body).then(
    updatedPost => res.json(updatedPost)
  )
})

router.delete('/:title', (req, res) => {
  Post.findOneAndRemove({ title: req.params.title }).then(deletedPost =>
    res.json(deletedPost)
  )
})

module.exports = router
