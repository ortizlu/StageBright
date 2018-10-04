const mongoose = require('../db/connection')
const Post = require('../models/post')
const User = require('../models/user')

module.exports = {
  // get('/post/new', postController.new)
  // NOTE: NEEDS TO BE AUTHENTICATED
  new: (req, res) => {
    if (req.user) {
      res.render('post/new')
    } else {
      res.redirect('/user/login')
    }
  },
  // post('/post', postController.create)
  // NOTE: NEEDS TO BE AUTHENTICATED
  create: (req, res) => {
    User.findById(req.user._id).then(foundUser => {
      Post.create({
        title: req.body.title,
        description: req.body.description,
        mediatype: req.body.mediatype,
        url: req.body.url,
        likes: 0,
        author: req.user._id
      }).then(post => {
        foundUser.posts.push(post)
        foundUser.save()
        res.redirect(`/post/${post._id}`)
      })
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
    if (!req.body.name) {
      currentUser._id
      // User.findByIdAndUpdate(currentUser._id)
    } else {
      console.log('this is where the big edit to user is supposed to go')
    }
  },
  // delete('/post/:id', postController.destroy)
  destroy: (req, res) => {
    res.send('this is our post using delete request')
  }
}
