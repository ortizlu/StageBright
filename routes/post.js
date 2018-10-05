const express = require('express')
const aws = require('aws-sdk')
const router = express.Router()
const postController = require('../controller/post')
const multer = require('multer')
const S3 = require('multer-storage-s3')

var storage = S3({
  destination: function(req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  },
  bucket: 'stagebright',
  region: 'us-east-1'
})

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

//should limit files up to 20mb
// and file filter filters for photos only
var uploadMiddleware = multer({
  storage: storage,
  limits: { fileSize: 17878130 },
  fileFilter: fileFilter
})

//====================================

router.get('/new', checkAuthentication, postController.new)
router.post(
  '/',
  checkAuthentication,
  uploadMiddleware.single('url'),
  postController.create
)
router.get('/:id', postController.show)
router.get('/:id/edit', checkAuthentication, postController.edit)
router.put(
  '/:id',
  checkAuthentication,
  uploadMiddleware.single('url'),
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
