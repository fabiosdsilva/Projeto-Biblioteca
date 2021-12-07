const express = require('express')
const router = express.Router()

//HOME
const home = require('./controllers/home/homeController')
router.get('/', home.home)

//READING
const reading  = require('./controllers/home/homeController')
router.get('/reading/:slug', reading.reading)

//SIGNUP


//LOGIN
const login = require('./controllers/login/loginController')
router.get('/login', login.login)

module.exports = router
