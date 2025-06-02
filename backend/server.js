require('dotenv').config();
require('reflect-metadata'); // Necessário para TypeORM
const { AppDataSource } = require('./src/config/db'); // Conexão TypeORM
const cors = require("cors"); // Importação do cors
const express = require("express");

const app = express();

// Não precisa mais destas duplicatas aqui:
// require('dotenv').config();
// require('reflect-metadata');
// const bodyParser = require('body-parser'); // bodyParser não está sendo usado, pode remover
// const { AppDataSource } = require('./src/config/db');

app.use(cors());
app.use(express.json()); // Já lida com JSON payloads
app.use(express.urlencoded({ extended: true })); // Para dados de formulário URL-encoded

// As linhas comentadas do bodyParser estão corretas (não são necessárias)
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

const testRoutes = require("./src/routes/testRoute");
const authRoute = require("./src/routes/authRoute");
const postRoute = require("./src/routes/postRoute");

app.use("/", testRoutes);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Banco de dados conectado com sucesso!");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Erro ao conectar com o banco de dados:", err);
  });