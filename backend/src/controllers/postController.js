const { AppDataSource } = require("../config/db")
const bcrypt = require("bcrypt");
const { generateToken } = require("../middlewares/authMiddleware");
const User = require("../entity/User");

class postController {

    async createPost(req, res) {
         try {
      const { Id_usuario, Titulo, Conteudo, Endereco } = req.body;
      
      if (!Id_usuario || !Titulo || !Conteudo) {
        return res.status(400).json({
          success: false,
          message: "Os campos Id_usuario, Titulo e Conteudo são obrigatórios"
        });
      }
      
      const feedRepository = AppDataSource.getRepository(Feed);
      
      const newPost = feedRepository.create({
        Id_usuario,
        Titulo,
        Conteudo,
        Data_publi: new Date(),
        Endereco: Endereco || null
      });
      
      await feedRepository.save(newPost);
      
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
      const feedRepository = AppDataSource.getRepository(Feed);
      
      const posts = await feedRepository.find({
        order: {
          Data_publi: "DESC"
        }
      });
      
      return res.status(200).json({
        success: true,
        count: posts.length,
        data: posts
      });
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
      return res.status(500).json({
        success: false,
        message: "Erro ao buscar posts",
        error: error.message
      });
    }
  }

  async getUserPosts(req, res) {
    try {
      const { userId } = req.params;
      
      const feedRepository = AppDataSource.getRepository(Feed);
      
      const posts = await feedRepository.find({
        where: { Id_usuario: userId },
        order: {
          Data_publi: "DESC"
        }
      });
      
      return res.status(200).json({
        success: true,
        count: posts.length,
        data: posts
      });
    } catch (error) {
      console.error("Erro ao buscar posts do usuário:", error);
      return res.status(500).json({
        success: false,
        message: "Erro ao buscar posts do usuário",
        error: error.message
      });
    }
  }

   async getPostById(req, res) {
    try {
      const { id } = req.params;
      
      const feedRepository = AppDataSource.getRepository(Feed);
      
      const post = await feedRepository.findOneBy({ Id_post: id });
      
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
      console.error("Erro ao buscar post:", error);
      return res.status(500).json({
        success: false,
        message: "Erro ao buscar post",
        error: error.message
      });
    }
  }

   async updatePost(req, res) {
    try {
      const { id } = req.params;
      const { Titulo, Conteudo, Endereco } = req.body;
      
      const feedRepository = AppDataSource.getRepository(Feed);
      
      const post = await feedRepository.findOneBy({ Id_post: id });
      
      if (!post) {
        return res.status(404).json({
          success: false,
          message: "Post não encontrado"
        });
      }
      
      if (Titulo !== undefined) post.Titulo = Titulo;
      if (Conteudo !== undefined) post.Conteudo = Conteudo;
      if (Endereco !== undefined) post.Endereco = Endereco;
      
      await feedRepository.save(post);
      
      return res.status(200).json({
        success: true,
        message: "Post atualizado com sucesso",
        data: post
      });
    } catch (error) {
      console.error("Erro ao atualizar post:", error);
      return res.status(500).json({
        success: false,
        message: "Erro ao atualizar o post",
        error: error.message
      });
    }
  }

   async deletePost(req, res) {
    try {
      const { id } = req.params;
      
      const feedRepository = AppDataSource.getRepository(Feed);
      
      const post = await feedRepository.findOneBy({ Id_post: id });
      
      if (!post) {
        return res.status(404).json({
          success: false,
          message: "Post não encontrado"
        });
      }
      
      await feedRepository.remove(post);
      
      return res.status(200).json({
        success: true,
        message: "Post excluído com sucesso"
      });
    } catch (error) {
      console.error("Erro ao excluir post:", error);
      return res.status(500).json({
        success: false,
        message: "Erro ao excluir o post",
        error: error.message
      });
    }
  }
};

module.exports = postController;
