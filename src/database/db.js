// src/database/db.js
const mysql = require('mysql');
const dbConfig = require('../../config/dbconfig');

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados MySQL');
  }
});

module.exports = db;