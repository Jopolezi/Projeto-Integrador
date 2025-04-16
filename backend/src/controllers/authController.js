const { AppDataSource } = require("../config/db")
const bcrypt = require("bcrypt");
const { generateToken } = require("../middlewares/authMiddleware");
const User = require("../entity/User");

class userController {
  async criarUser(req, res) {
    try {
      const { name, sobrenome, email, cpf, telefone, password } = req.body;

      if (!name || !sobrenome || !email || !cpf || !telefone || !password) {
        return res.status(400).json({
          success: false,
          message: "Campos obrigatórios não fornecidos",
        });
      }

      const userRepository = AppDataSource.getRepository("User");

      const existingUser = await userRepository.findOneBy({ email });
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: "Email já cadastrado",
        });
      }

      const nomeCompleto = `${name} ${sobrenome}`;
      const senhaCriptografada = await bcrypt.hash(password, 10);

      const novoUsuario = userRepository.create({
        name: nomeCompleto,
        email,
        cpf,
        telefone,
        password: senhaCriptografada,
      });

      await userRepository.save(novoUsuario);

      return res.status(201).json({
        success: true,
        message: "Usuário cadastrado com sucesso!",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro interno no servidor",
        error: error.message,
      });
    }
  }

  async logarUser(req, res) {
    try {
      const { email, cpf, cnpj, password } = req.body;

      if (!(email || cpf || cnpj) || !password) {
        return res.status(400).json({
          success: false,
          message: "Campos obrigatórios não fornecidos",
        });
      }

      const userRepository = AppDataSource.getRepository("User");

      let user;
      if (email) user = await userRepository.findOneBy({ email });
      else if (cpf) user = await userRepository.findOneBy({ cpf });
      else if (cnpj) user = await userRepository.findOneBy({ cnpj });

      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Usuário não encontrado",
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: "Senha incorreta",
        });
      }

      const token = generateToken(user);

      res.status(200).json({
        success: true,
        message: "Login bem-sucedido!",
        token,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro interno no servidor",
        error: error.message,
      });
    }
  }
}

module.exports = new userController();
