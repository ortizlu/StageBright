const express = require('express')
const router = express.Router()
const applicationController = require('../controller/application')
const passport = require('passport')

router.get('/', applicationController.home)
router.get('/home', applicationController.index)
module.exports = router
