// src/database/db_sample.js
const mysql = require('mysql');
const dbConfig = require('../../config/dbconfig-sample');

// Uso das credenciais no arquivo
const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados MySQL');
  }
});

module.exports = db;