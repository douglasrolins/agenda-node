// Por padrão, a aplicação utiliza variáveis de ambiente para obter essas credenciais.
// Variáveis de ambiente no arquivo .env

// Caso vá usar as credenciais por este arquivo, renomear o arquivo para: config/dbconfig.js
const dbConfig = {
    host: '', // Servidor do banco de dados
    user: '', // Nome do usuário do MySQL
    password: '', // Senha do MySQL
    database: '', // Nome do banco de dados
  };
  
  module.exports = dbConfig;