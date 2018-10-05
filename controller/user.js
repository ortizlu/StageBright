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
    User.findById(req.params.id)
      .populate('posts')
      .then(user => {
        res.render('user/show', { user })
      })
  },
  // get('/user/:id/edit', userController.edit)
  edit: (req, res) => {
    // find current user
    User.findById(req.params.id).then(user => {
      // and compare to signed in user
      if (String(user.id) == String(req.user._id)) {
        // show edit user if same
        res.render('user/edit')
      } else {
        // otherwise redirect
        res.redirect('/home')
      }
    })
  },
  // put('/user/:id', userController.update)
  update: (req, res) => {
    // find current user
    User.findById(req.params.id).then(user => {
      // and compare to signed in user
      if (String(user.id) == String(req.user._id)) {
        User.findByIdAndUpdate(req.params.id, {
          name: req.body.name,
          bio: req.body.bio,
          email: req.body.email
        }).then(updatedUser => {
          res.redirect('/user/' + updatedUser._id)
        })
      } else {
        // otherwise redirect
        res.redirect('/home')
      }
    })
  },
  // delete('/user/:id', userController.delete)
  destroy: (req, res) => {
    User.findById(req.params.id).then(user => {
      if (String(user.id) == req.user._id) {
        req.logout()
        User.findByIdAndRemove(req.params.id).then(_ => {
          res.redirect('/home')
        })
      } else {
        res.redirect('/home')
      }
    })
  }
}
