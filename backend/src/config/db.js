require('dotenv').config();
require('reflect-metadata');
const { DataSource } = require('typeorm');

// Criação da instância de conexão com o banco usando variáveis de ambiente
const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,     // exemplo: localhost
  port: 3306,
  username: process.env.DB_USER, // exemplo: root
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true, // cria tabelas automaticamente com base nas entidades
  logging: false,
  entities: [__dirname + '/../entity/*.js'], // caminho para entidades
});

module.exports = {
  AppDataSource,
};
