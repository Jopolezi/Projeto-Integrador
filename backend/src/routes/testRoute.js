const express = require("express");
const { testRoute } = require("../controllers/testController");

const router = express.Router();

// Rota de teste simples
router.get("/teste", testRoute);

module.exports = router;
