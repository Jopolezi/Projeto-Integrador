require('dotenv').config(); 
require('reflect-metadata'); // Necessário para TypeORM
const { AppDataSource } = require('./src/config/db'); // Conexão TypeORM

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const testRoutes = require("./src/routes/testRoute");
const authRoute = require("./src/routes/authRoute");


app.use("/", testRoutes);
app.use("/api/auth", authRoute);


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
