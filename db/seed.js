const User = require('../models/User')
const Post = require('../models/post')
// const bcrypt = require('bcrypt-nodejs')

// const createPassword = password =>
//   bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

User.find({}).remove(() => {
  Post.find({}).remove(() => {
    let pancake = User.create({
      email: 'pancake@gmail.com',
      password: 'password'
    }).then(user => {
      Promise.all([
        Post.create({
          title: 'The waffle?',
          description: 'This is a photo I took of a waffle',
          type: 'photo',
          url:
            'https://images.unsplash.com/photo-1535266438678-16e3f1cdc9b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e9ca3d0e3513193f54c0ad0527ce1358&auto=format&fit=crop&w=634&q=80',
          likes: 3,
          author: user._id
        }).then(post => {
          user.posts.push(post)
        }),
        Post.create({
          title: 'The waffle?',
          description: 'This is a photo I took of a waffle',
          type: 'photo',
          url:
            'https://images.unsplash.com/photo-1535266438678-16e3f1cdc9b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e9ca3d0e3513193f54c0ad0527ce1358&auto=format&fit=crop&w=634&q=80',
          likes: 3,
          author: user._id
        }).then(post => {
          user.posts.push(post)
        })
      ]).then(() => {
        user.save(err => console.log(err))
      })
    })

    let car = User.create({
      email: 'car@gmail.com',
      password: 'password'
    }).then(user => {
      Promise.all([
        Post.create({
          title: 'The waffle?',
          description: 'This is a photo I took of a waffle',
          type: 'photo',
          url:
            'https://images.unsplash.com/photo-1535266438678-16e3f1cdc9b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e9ca3d0e3513193f54c0ad0527ce1358&auto=format&fit=crop&w=634&q=80',
          likes: 3,
          author: user._id
        }).then(post => {
          user.posts.push(post)
        }),
        Post.create({
          title: 'The waffle?',
          description: 'This is a photo I took of a waffle',
          type: 'photo',
          url:
            'https://images.unsplash.com/photo-1535266438678-16e3f1cdc9b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e9ca3d0e3513193f54c0ad0527ce1358&auto=format&fit=crop&w=634&q=80',
          likes: 3,
          author: user._id
        }).then(post => {
          user.posts.push(post)
        })
      ]).then(() => {
        user.save(err => console.log(err))
      })
    })

    let queen = User.create({
      email: 'queen@gmail.com',
      password: 'password'
    }).then(user => {
      Promise.all([
        Post.create({
          title: 'The waffle?',
          description: 'This is a photo I took of a waffle',
          type: 'photo',
          url:
            'https://images.unsplash.com/photo-1535266438678-16e3f1cdc9b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e9ca3d0e3513193f54c0ad0527ce1358&auto=format&fit=crop&w=634&q=80',
          likes: 3,
          author: user._id
        }).then(post => {
          user.posts.push(post)
        }),

        Post.create({
          title: 'The waffle?',
          description: 'This is a photo I took of a waffle',
          type: 'photo',
          url:
            'https://images.unsplash.com/photo-1535266438678-16e3f1cdc9b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e9ca3d0e3513193f54c0ad0527ce1358&auto=format&fit=crop&w=634&q=80',
          likes: 3,
          author: user._id
        }).then(post => {
          user.posts.push(post)
        })
      ]).then(() => {
        user.save(err => console.log(err))
      })
    })
  })
})
