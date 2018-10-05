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
          mediatype: 'photo',
          url: '/waffle1.jpeg',
          likes: 3,
          author: user._id
        }).then(post => {
          user.posts.push(post)
        }),
        Post.create({
          title: 'Pancake Bliss',
          description: 'This is a photo I took of a pancake',
          mediatype: 'photo',
          url: '/waffle2.jpeg',
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
          title: 'My Red Hot Rod',
          description: 'This is my beater car',
          mediatype: 'photo',
          url: '/car1.jpeg',
          likes: 3,
          author: user._id
        }).then(post => {
          user.posts.push(post)
        }),
        Post.create({
          title: 'White Car',
          description: 'This is my weekender car',
          mediatype: 'photo',
          url: '/car2.jpeg',
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
          mediatype: 'photo',
          url: '/queen1.jpeg',
          likes: 3,
          author: user._id
        }).then(post => {
          user.posts.push(post)
        }),

        Post.create({
          title: 'Picture of my castle',
          description: 'This is my castle description',
          mediatype: 'photo',
          url: '/queen2.jpeg',
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
