const express = require('express')
const router = express.Router()

//HOME
const home = require('./controllers/home/homeController');
router.get('/', home.index);

//READING
const book  = require('./controllers/read/readController');
router.get('/book/:id', book.show);

//SIGNUP


//LOGIN
const login = require('./controllers/login/loginController')
const Login = new login()
router.get('/login', Login.login)
router.post('/login', Login.loginAcess)

module.exports = router
