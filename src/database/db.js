// src/database/db.js
const mysql = require('mysql');
//const dbConfig = require('../../config/dbconfig');

// Caso utilize credenciais no aquivo, substituir as variáveis de ambiente por dbConfig
const db = mysql.createConnection(
  // Váriáveis de ambiente
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  }
);

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados MySQL');
  }
});

module.exports = db;