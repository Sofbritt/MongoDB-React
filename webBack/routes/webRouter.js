const express = require('express')
const router = express.Router()
const controller = require('../controllers/webController.js')


router.get('/', controller.mainController)


module.exports = router;