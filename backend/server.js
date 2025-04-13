const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

// Importando as rotas
const testRoutes = require("./src/routes/testRoute");
const authRoute = require("./src/routes/authRoute")

// Usando as rotas
app.use("/", testRoutes);

app.use("/api/auth", authRoute);

// Inicializa o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
