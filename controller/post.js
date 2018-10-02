const mongoose = require('../db/connection')
const Post = require('../models/post')
const User = require('../models/user')

module.exports = {
  new: (req, res) => {
    User.find({}).then(users => {
      res.render('post/new', { users })
    })
  },
  show: (req, res) => {
    Post.findOne({ _id: req.params.id })
      .populate('author')
      .then(post => {
        res.render('post/show', post)
      })
  },
  create: (req, res) => {
    Post.create({
      title: req.body.title,
      description: req.body.description,
      type: req.body.type,
      url: req.body.url,
      likes: 0
    }).then(post => {
      req.user.posts.push(post)
      req.user.save(err => {
        res.redirect(`/post/${post._id}`)
      })
    })
  },
  edit: (req, res) => {
    res.send('this is our post using get request')
  },
  update: (req, res) => {
    res.send('this is our post using put request')
  },
  destroy: (req, res) => {
    res.send('this is our post using delete request')
  }
}
