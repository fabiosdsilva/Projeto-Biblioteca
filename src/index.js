const express = require('express')
const session = require('express-session')
const app = express()
const path = require('path')
const port = 8083
const routes = require('./routes')

//VIEW ENGINE
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//EXPRESS JSON
app.use(express.urlencoded({ extended: true }))

//ENABLE PUBLIC FOLDER
app.use(express.static(path.join(__dirname, 'public')))

//ROUTES
app.use(routes)

//PLAYNG SERVER
app.listen(port, () =>{ console.log(`Rodando na porta ${port}`) })