const userController = require("../controllers/authController");

const express = require("express");
const { verifyToken } = require("../middlewares/authMiddleware");
const router = express.Router();


// Rota de login do user.
router.post("/login",userController.loginUser);

//rota de registro do user.
router.post("/register",userController.createUser)

// Rota de perfil, falta colocar a parte de front na rota, essa rota está em desenvolvimento ainda.
router.get("/perfil", verifyToken, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Acesso ao perfil autorizado!",
    user: req.user, // Dados do usuário extraídos do token.
  });
});

module.exports = router;
