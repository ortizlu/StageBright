const express = require('express')
const router = express.Router()
const userController = require('../controller/user')
const passport = require('passport')

router.get('/new', userController.new)
router.post('/', userController.create)

router.get('/signup', (req, res) => {
  res.render('user/signup', { message: req.flash('signupMessage') })
})

router.post('/signup', (req, res) => {
  var signupStrategy = passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/user/signup',
    failureFlash: true
  })
  return signupStrategy(req, res)
})

router.get('/login', (req, res) => {
  res.render('user/login', { message: req.flash('loginMessage') })
})

router.post('/login', (req, res) => {
  var loginStrategy = passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/user/login',
    failureFlash: true
  })
  return loginStrategy(req, res)
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

router.get('/:id', userController.show)

module.exports = router
