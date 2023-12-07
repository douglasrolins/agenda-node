// src/database/db_postgres.js
const { Pool } = require('pg');

const pool = new Pool(
  // variáveis de ambiente (arquivo .env na raiz ou configurado no servidor)
  {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    //port: process.env.POSTGRES_PORT,
    ssl: {
      rejectUnauthorized: false, // Permite conexões inseguras, útil para desenvolvimento
    },
    sslmode: 'require'
  }
);

pool.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados PostgreSQL:', err);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados PostgreSQL');
  }
});

module.exports = pool;
