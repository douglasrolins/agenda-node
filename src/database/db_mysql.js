// src/database/db_mysql.js
const mysql = require('mysql');

const db = mysql.createConnection(
  // variáveis de ambiente (arquivo .env na raiz ou configurado no servidor)
  {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
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