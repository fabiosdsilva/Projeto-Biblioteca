const express = require('express')
const session = require('express-session')

const port = 8083

const app = express()

const routes = require('./routes')

//VIEW ENGINE
app.set('view engine', 'ejs')

//EXPRESS JSON
app.use(express.urlencoded({ extended: true }))

//ENABLE PUBLIC FOLDER
app.use(express.static('public'))

//ROUTES
app.use(routes)

//PLAYNG SERVER
app.listen(port, () =>{ console.log(`Rodando na porta ${port}`) })