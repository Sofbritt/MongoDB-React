const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller.js')


router.get('/', controller.mainController)
router.get('/add', controller.addFilm)


module.exports = router