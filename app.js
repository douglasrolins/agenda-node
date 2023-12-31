// app.js
const dotenv = require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

// Banco de dados
const dbType = process.env.DB_TYPE || 'postgres';

if (dbType === 'mysql') {
  const db = require('./src/database/db_mysql');
} else if (dbType === 'postgres') {
  const db = require('./src/database/db_postgres');
} else {
  console.error('Tipo de banco de dados não suportado:', dbType);
  process.exit(1);
}

// Configurar o mecanismo de template Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'src', 'views')); // Caminho relativo

// Configurar o middleware para análise de formulário
app.use(express.urlencoded({ extended: true }));

// Configurar as rotas
const appRoutes = require('./src/routes/appRoutes');
app.use('/', appRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});