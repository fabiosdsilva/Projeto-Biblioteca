const express = require('express')
const router = express.Router()

//HOME
const home = require('./controllers/home/homeController')
router.get('/', home)

//signup

module.exports = router
