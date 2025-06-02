const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1h", 
  });
};

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; 

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

    req.user = decoded;
    next();
  });
};

module.exports = { generateToken, verifyToken };
