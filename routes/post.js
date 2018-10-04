const express = require('express')
const router = express.Router()
const postController = require('../controller/post')
const multer = require('multer')

// MULTER JS FILE UPLOADING
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
})

//====================================

router.get('/new', checkAuthentication, postController.new)
router.post(
  '/',
  checkAuthentication,
  upload.single('url'),
  postController.create
)
router.get('/:id', postController.show)
router.get('/:id/edit', checkAuthentication, postController.edit)
router.put(
  '/:id',
  checkAuthentication,
  upload.single('url'),
  postController.update
)
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
