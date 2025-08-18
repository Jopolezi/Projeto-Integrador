require('dotenv').config(); // Carrega as variáveis do .env
require('reflect-metadata'); // Necessário para TypeORM
const { AppDataSource } = require('./src/config/db'); // Conexão TypeORM

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Importando as rotas
const testRoutes = require("./src/routes/testRoute");
const authRoute = require("./src/routes/authRoute");

// Usando as rotas
app.use("/", testRoutes);
app.use("/api/auth", authRoute);

// Inicializa a conexão com o banco de dados e só depois sobe o servidor
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
