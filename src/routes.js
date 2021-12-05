const express = require('express')
const router = express.Router()

//HOME
const home = require('./controllers/home/homeController')
router.get('/', home.home)

//READING
const reading  = require('./controllers/home/homeController')
router.get('/reading/:slug', reading.reading)

//signup

module.exports = router
