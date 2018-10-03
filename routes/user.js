const express = require('express')
const router = express.Router()
const userController = require('../controller/user')
const passport = require('passport')

router.get('/login', userController.loginForm)
router.post('/login', userController.loginSend)
router.get('/signup', userController.signupForm)
router.post('/signup', userController.signupSend)
router.get('/logout', userController.logout)
router.get('/:id', userController.show)
router.get('/:id/edit', checkAuthentication, userController.edit)
router.put('/:id', checkAuthentication, userController.update)
// router.delete('/:id', userController.delete)

function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    //req.isAuthenticated() will return true if user is logged in
    next()
  } else {
    res.redirect('/user/login')
  }
}

module.exports = router
