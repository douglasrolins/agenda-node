// src/models/companyModel.js
const db = require('../database/db');

class Company {
  static getAll(callback) {
    db.query('SELECT * FROM companies', (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }

  static create(name, address, callback) {
    db.query('INSERT INTO companies (name, address) VALUES (?, ?)', [name, address], (error, results) => {
      if (error) throw error;
      callback(results.insertId);
    });
  }
}

module.exports = Company;
