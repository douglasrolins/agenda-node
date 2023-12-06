// src/controllers/homeController.js
class HomeController {
  static getHomePage(req, res) {
    res.render('index/home', { pageTitle: 'Página Inicial' });
  }
}

module.exports = HomeController;
