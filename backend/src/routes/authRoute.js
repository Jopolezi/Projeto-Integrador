
const userController = require("../controllers/authController");

const express = require("express");
const { verifyToken } = require("../middlewares/authMiddleware");
const router = express.Router();


// Rota de login do user, nada de empresa ainda
router.post("/login",userController.logarUser);

//rota de registro do user, nada de empresa ainda
router.post("/register",userController.criarUser)

// Rota de perfil, protegida pelo JWT, empresa será implementada 
router.get("/perfil", verifyToken, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Acesso ao perfil autorizado!",
    user: req.user, // Dados do usuário extraídos do token
  });
});

module.exports = router;
