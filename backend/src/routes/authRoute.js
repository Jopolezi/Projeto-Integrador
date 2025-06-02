const userController = require("../controllers/authController");

const express = require("express");
const { verifyToken } = require("../middlewares/authJWT");
const router = express.Router();

router.post("/login",userController.loginUser);

router.post("/register",userController.createUser)


router.get("/perfil", verifyToken, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Acesso ao perfil autorizado!",
    user: req.user, 
  });
});

module.exports = router;
