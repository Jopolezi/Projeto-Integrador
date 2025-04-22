const jwt = require("jsonwebtoken");
require("dotenv").config();

// Função para gerar o token JWT
const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1h", // Token expira após 1 hora, contagem começa logo quando o usuario utilizar a função de login
  });
};

// Função para verificar se o token está batendo com o token passado 
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Obtém o token do cabeçalho Authorization

  if (!token) {
    return res.status(403).json({
      success: false,
      message: "Token não fornecido!",
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "Token inválido ou expirado!",
      });
    }

    // Armazenando os dados do usuário decodificados no objeto da requisição
    req.user = decoded;
    next();
  });
};

module.exports = { generateToken, verifyToken };
