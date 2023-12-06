// src/controllers/companyController.js
const Company = require('../models/companyModel');

class CompanyController {
  static getAllCompanies(req, res) {
    Company.getAll((companies) => {
      res.render('companies/index', { companies, pageTitle: 'Lista de Empresas'  });
    });
  }

  static getNewCompanyForm(req, res) {
    res.render('companies/new', { pageTitle: 'Nova Empresa' });
  }

  static createNewCompany(req, res) {
    const { name, address } = req.body;
    Company.create(name, address, (companyId) => {
      res.redirect('/companies');
    });
  }
}

module.exports = CompanyController;
