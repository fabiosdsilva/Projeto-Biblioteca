exports.home = (req, res) =>{
    res.render('home')
}

exports.reading = (req, res) =>{
    var slug = req.params.slug
    res.render('read/reading')
}

