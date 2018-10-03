const User = require('../models/user')
const passport = require('passport')

module.exports = {
  // get('/user/login', userController.loginForm)
  loginForm: (req, res) => {
    res.render('user/login', { message: req.flash('loginMessage') })
  },
  // post('/user/login', userController.loginSend)
  loginSend: (req, res) => {
    var loginStrategy = passport.authenticate('local-login', {
      successRedirect: '/',
      failureRedirect: '/user/login',
      failureFlash: true
    })
    return loginStrategy(req, res)
  },
  // get('/user/signup', userController.signupForm)
  signupForm: (req, res) => {
    res.render('user/signup', { message: req.flash('signupMessage') })
  },
  // post('/user/signup', userController.signupSend)
  signupSend: (req, res) => {
    var signupStrategy = passport.authenticate('local-signup', {
      successRedirect: '/',
      failureRedirect: '/user/signup',
      failureFlash: true
    })
    return signupStrategy(req, res)
  },
  // get('/user/logout', userController.logout)
  logout: (req, res) => {
    req.logout()
    res.redirect('/')
  },
  // get('/user/:id', userController.show)
  show: (req, res) => {
    console.log(req.params.id)
  }
  // // get('/user/:id/edit', userController.edit)
  // edit: (req, res) => {
  //   console.log('this is our edit route that needs to be built')
  // },
  // // put('/user/:id', userController.update)
  // update: (req, res) => {
  //   console.log('this is our update route that needs to be built')
  // },
  // // delete('/user/:id', userController.delete)
  // destroy: (req, res) => {
  //   console.log('this is our destroy route that needs to be built')
  // }
}
