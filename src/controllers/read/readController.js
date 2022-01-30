const axios = require('axios');

class ReadController {
  async show(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(404);
    }
    try {
      const { data } = await axios.get(`http://localhost:8081/book/${id}`);
      return res.render('read/reading', { data });
    } catch (error) {
      return res.status(404).json(error.name);
    }
  }
}

module.exports = new ReadController();
