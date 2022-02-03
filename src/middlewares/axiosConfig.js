const axios = require('axios');

module.exports = {
  headers: {
    Authorization: "Bearer" + localStorage.getItem("token")
  }
}
