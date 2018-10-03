const User = require('../models/User')
const Post = require('../models/post')
// const bcrypt = require('bcrypt-nodejs')

// const createPassword = password =>
//   bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

User.find({}).remove(() => {
  Post.find({}).remove(() => {
    let pancake = User.create({
      name: 'Mr. Pancake Man',
      bio:
        "I was born in the bronx, lived in the slums, and now I ball hard with very expensive cameras. I'm a professional photographer",
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
      name: 'Mr. Car Man',
      bio:
        "I was born in NYC, lived in LA for 3 years, and now I ride hard with very expensive cameras. I'm a professional photographer",
      email: 'car@gmail.com',
      password: 'password'
    }).then(user => {
      Promise.all([
        Post.create({
          title: 'The waffle?',
          description: 'This is my beater car',
          type: 'photo',
          url:
            'https://images.unsplash.com/photo-1532988633349-d3dfb28ee834?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=27db7bd25fb02721c56f744d6bce008c&auto=format&fit=crop&w=934&q=80',
          likes: 3,
          author: user._id
        }).then(post => {
          user.posts.push(post)
        }),
        Post.create({
          title: 'White Car',
          description: 'This is my weekender car',
          type: 'photo',
          url:
            'https://images.unsplash.com/photo-1531163953594-bc9a034fafb1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7871bcd85a128e3983f3844e44362f28&auto=format&fit=crop&w=800&q=60',
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
      name: 'Ms. Queen',
      bio:
        "I was born in queens, lived in Bel Air, and now I take pretty photos with very expensive cameras. I'm a professional photographer",
      email: 'queen@gmail.com',
      password: 'password'
    }).then(user => {
      Promise.all([
        Post.create({
          title: 'Self Photograph',
          description:
            "This is a photo I took of myself during a nightly bath. Don't I look so chic?",
          type: 'photo',
          url:
            'https://images.unsplash.com/photo-1536680682715-03cca719f893?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=81ea9340ba532db4ca827d418facc939&auto=format&fit=crop&w=800&q=60',
          likes: 3,
          author: user._id
        }).then(post => {
          user.posts.push(post)
        }),

        Post.create({
          title: 'Picture of my castle',
          description: 'This is my castle description',
          type: 'photo',
          url:
            'https://images.unsplash.com/photo-1533154613417-407cfcf6abb2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b87f07734d410f07579a2c41d783eb7e&auto=format&fit=crop&w=800&q=60',
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
