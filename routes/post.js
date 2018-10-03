const express = require('express')
const router = express.Router()
const postController = require('../controller/post')

router.get('/new', checkAuthentication, postController.new)
router.post('/', checkAuthentication, postController.create)
router.get('/:id', postController.show)
router.get('/:id/edit', checkAuthentication, postController.edit)
router.put('/:id', checkAuthentication, postController.update)
router.delete('/:id', checkAuthentication, postController.destroy)

function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    //req.isAuthenticated() will return true if user is logged in
    next()
  } else {
    res.redirect('/user/login')
  }
}

module.exports = router
