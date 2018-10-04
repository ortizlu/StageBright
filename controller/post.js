const mongoose = require('../db/connection')
const Post = require('../models/post')
const User = require('../models/user')

module.exports = {
  // get('/post/new', postController.new)
  new: (req, res) => {
    res.render('post/new')
  },
  // post('/post', postController.create)
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
    Post.findById(req.params.id).then(post => {
      if (String(post.author) == String(req.user._id)) {
        res.render('post/edit', post)
      } else {
        res.redirect('/')
      }
    })
  },
  // put('/post/:id', postController.update)
  update: (req, res) => {
    // create a global variable to store owner of post
    let owner
    // find post and assign author to owner
    Post.findById(req.params.id)
      .then(foundPost => {
        owner = foundPost.author
      })
      .then(_ => {
        // check if post belongs to signed in user
        if (String(owner) == String(req.user._id)) {
          // and update if so
          Post.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            description: req.body.description,
            mediatype: req.body.mediatype,
            url: req.body.url
          }).then(post => {
            res.redirect('/post/' + req.params.id)
          })
        } else {
          // but redirect if it isn't
          res.redirect('/')
        }
      })
  },
  // delete('/post/:id', postController.destroy)
  destroy: (req, res) => {
    // create a global variable to store owner of post
    let owner
    // find post and assign author to owner
    Post.findById(req.params.id)
      .then(foundPost => {
        owner = foundPost.author
      })
      .then(_ => {
        // check if post belongs to signed in user
        if (String(owner) == String(req.user._id)) {
          // and update if so
          Post.findByIdAndRemove(req.params.id).then(_ => {
            res.redirect('/')
          })
        } else {
          // otherwise don't delete but redirect only
          res.redirect('/')
        }
      })
  }
}
