const { AppDataSource } = require("../config/db");
const Job = require("../entity/Job");

const isPostOwner = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Usuário não autenticado"
      });
    }

    const jobRepository = AppDataSource.getRepository(Job);
    const post = await jobRepository.findOne({
      where: { id: parseInt(id) },
      relations: ["user"]  
    });

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post não encontrado"
      });
    }

    if (post.user.id !== userId) {
      return res.status(403).json({
        success: false,
        message: "Você não tem permissão para modificar este post"
      });
    }

    req.post = post;
    next();
  } catch (error) {
    console.error("Erro no middleware isPostOwner:", error);
    return res.status(500).json({
      success: false,
      message: "Erro interno do servidor",
      error: error.message
    });
  }
};


module.exports = { isPostOwner };