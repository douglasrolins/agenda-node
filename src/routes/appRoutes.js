// src/routes/appRoutes.js
const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/companyController');
const HomeController = require('../controllers/homeController');


router.get('/', HomeController.getHomePage);

router.get('/companies', CompanyController.getAllCompanies);
router.get('/companies/new', CompanyController.getNewCompanyForm);
router.post('/companies/new', CompanyController.createNewCompany);

module.exports = router;
