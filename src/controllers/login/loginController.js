const axios = require('axios');
class LoginController {
    async loginAcess(req, res) {
        const { email, password } = req.body;
        const data = { email, password };
        try {
          const request = await axios.post('http://localhost:8081/auth', data);
          console.log(request.data);
          return res.redirect('/');
        } catch (error) {
          return res.json(error);
        }
    }

    login(req, res) {
        res.render('login/login');
    }
}

module.exports = LoginController
