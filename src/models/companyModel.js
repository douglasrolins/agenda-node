// src/models/companyModel.js

// TODO: Ajustar modo de acessar os dois bancos de dados dentro do construtor das classes
let db;
const dbType = process.env.DB_TYPE || 'postgres';

if (dbType === 'mysql') {
  db = require('../database/db_mysql');
} else if (dbType === 'postgres') {
  db = require('../database/db_postgres');
} else {
  console.error('Tipo de banco de dados não suportado:', dbType);
  process.exit(1);
}

class Company {

  // TODO: Ajustar para tratar com dois bancos de dados

  /* Mysql
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
  */

  // Postgres
  static getAll(callback) {
    db.query('SELECT * FROM companies', (error, results) => {
      if (error) throw error;
      callback(results.rows); // Acesse os resultados usando results.rows
    });
  }

  // Postgres
  static create(name, address, callback) {
    db.query('INSERT INTO companies (name, address) VALUES ($1, $2) RETURNING id', [name, address], (error, results) => {
      if (error) throw error;
      callback(results.rows[0].id);
    });
  }
}

module.exports = Company;
