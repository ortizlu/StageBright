const express = require('express')
const router = express.Router()
const applicationController = require('../controller/application')
const passport = require('passport')

router.get('/', applicationController.index)

module.exports = router
