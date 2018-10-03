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
// router.get('/:id/edit', userController.edit)
// router.get('/:id', userController.update)
// router.get('/:id', userController.delete)

module.exports = router
