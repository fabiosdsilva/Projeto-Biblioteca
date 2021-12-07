exports.login = (req, res) =>{
    res.render('login/login')
}

exports.loginAcess = (req, res) =>{
    res.send('Acess')
}