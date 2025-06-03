const cors = require("cors");
const express = require("express");
const app = express();

require('dotenv').config(); 
require('reflect-metadata'); 
const bodyParser = require('body-parser');
const { AppDataSource } = require('./src/config/db'); 

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const testRoutes = require("./src/routes/testRoute");
const authRoute = require("./src/routes/authRoute");
const postRoute = require("./src/routes/postRoute")
const ratingRoute = require("./src/routes/ratingRoute")


app.use("/", testRoutes);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute)
app.use("/api/ratings",ratingRoute )


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
