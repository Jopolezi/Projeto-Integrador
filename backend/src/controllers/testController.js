const testRoute = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Rota de teste funcionando!",
  });
};

module.exports = { testRoute };