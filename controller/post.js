const mongoose = require('../db/connection')
const Post = require('../models/post')
const User = require('../models/user')

module.exports = {
  // get('/post/new', postController.new)
  // NOTE: NEEDS TO BE AUTHENTICATED
  new: (req, res) => {
    res.render('post/new')
  },
  // post('/post', postController.create)
  // NOTE: NEEDS TO BE AUTHENTICATED
  create: (req, res) => {
    Post.create({
      title: req.body.title,
      description: req.body.description,
      type: req.body.type,
      url: req.body.url,
      likes: 0
    }).then(post => {
      res.redirect(`/post/${post._id}`)
    })
  },
  // get('/post/:id', postController.show)
  show: (req, res) => {
    Post.findOne({ _id: req.params.id })
      .populate('author')
      .then(post => {
        res.render('post/show', post)
      })
  },
  // get('/post/:id/edit', postController.edit)
  edit: (req, res) => {
    res.send('this is our post using get request')
  },
  // put('/post/:id', postController.update)
  update: (req, res) => {
    res.send('this is our post using put request')
  },
  // delete('/post/:id', postController.destroy)
  destroy: (req, res) => {
    res.send('this is our post using delete request')
  }
}
