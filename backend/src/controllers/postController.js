const { AppDataSource } = require("../config/db");
const Job = require("../entity/Job");

class PostController {

  async createPost(req, res) {
    try {
      const { titulo, descricao, localizacao, requisitos, tipoContrato, salario } = req.body;
      const userId = req.user.id;
      console.log('Dados recebidos:', { titulo, descricao, localizacao, requisitos, tipoContrato, salario });

      if (!titulo || !descricao) {
        return res.status(400).json({
          success: false,
          message: "Os campos titulo e descricao são obrigatórios"
        });
      }
      
      const tiposContrato = ["CLT", "PJ", "Freelancer", "Estágio"];
      if (tipoContrato && !tiposContrato.includes(tipoContrato)) {
        return res.status(400).json({
          success: false,
          message: "Tipo de contrato inválido. Use: CLT, PJ, Freelancer ou Estágio"
        });
      }

      const jobRepository = AppDataSource.getRepository(Job);

      const newPost = jobRepository.create({
        titulo,
        descricao,
        requisitos: requisitos || null,
        tipoContrato: tipoContrato || null,
        salario: salario || null,
        localizacao: localizacao || null,
        user: { id: userId }
      });

      await jobRepository.save(newPost);

      return res.status(201).json({
        success: true,
        message: "Post criado com sucesso",
        data: newPost
      });
    } catch (error) {
      console.error("Erro ao criar post:", error);
      return res.status(500).json({
        success: false,
        message: "Erro ao criar o post",
        error: error.message
      });
    }
  }

  async getAllPosts(req, res) {
    try {
      const jobRepository = AppDataSource.getRepository(Job);
      const posts = await jobRepository.find();
      
      return res.status(200).json({
        success: true,
        data: posts
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Erro ao buscar posts",
        error: error.message
      });
    }
  }

  async getPostById(req, res) {
    try {
      const { id } = req.params;
      const jobRepository = AppDataSource.getRepository(Job);
      const post = await jobRepository.findOneBy({ id: parseInt(id) });

      if (!post) {
        return res.status(404).json({
          success: false,
          message: "Post não encontrado"
        });
      }

      return res.status(200).json({
        success: true,
        data: post
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Erro ao buscar post",
        error: error.message
      });
    }
  }

  async getUserPosts(req, res) {
    try {
      const { userId } = req.params;
      const jobRepository = AppDataSource.getRepository(Job);

      const posts = await jobRepository.find({
  where: { user: { id: parseInt(userId) } },
  relations: ["user"]
});

      return res.status(200).json({
        success: true,
        data: posts
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Erro ao buscar posts do usuário",
        error: error.message
      });
    }
  }

 async updatePost(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user.id;  
    const { titulo, descricao, localizacao, requisitos, tipoContrato, salario } = req.body;

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

    if (titulo) post.titulo = titulo;
    if (descricao) post.descricao = descricao;
    if (localizacao !== undefined) post.localizacao = localizacao;
    if (requisitos !== undefined) post.requisitos = requisitos;
    if (tipoContrato !== undefined) post.tipoContrato = tipoContrato;
    if (salario !== undefined) post.salario = salario;

    await jobRepository.save(post);

    return res.status(200).json({
      success: true,
      message: "Post atualizado com sucesso",
      data: post
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Erro ao atualizar post",
      error: error.message
    });
  }
}


  async deletePost(req, res) {
    try {
      const { id } = req.params;
      const jobRepository = AppDataSource.getRepository(Job);
      
      const result = await jobRepository.delete(id);
      
      if (result.affected === 0) {
        return res.status(404).json({
          success: false,
          message: "Post não encontrado"
        });
      }

      return res.status(200).json({
        success: true,
        message: "Post deletado com sucesso"
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Erro ao deletar post",
        error: error.message
      });
    }
  }
}

module.exports = PostController;