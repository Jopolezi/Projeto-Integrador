const { AppDataSource } = require("../config/db")
const bcrypt = require("bcrypt");
const { generateToken } = require("../middlewares/authJWT");
const User = require("../entity/User");

class userController {
  async createUser(req, res) {
    try {
      const { name, surname, email, cpf, number, password } = req.body;

      if (!(email||cpf) || !password) {
        return res.status(400).json({
          success: false,
          message: "Campos obrigatórios não fornecidos",
        });
      }

      const userRepository = AppDataSource.getRepository(User);


      const existingUser = await userRepository.findOneBy({ email });
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: "Email já cadastrado",
        });
      }

      const completeName = `${name} ${surname}`;
      const senhaCriptografada = await bcrypt.hash(password, 10);

      const newUser = userRepository.create({
        name: completeName,
        email,
        cpf,
        number,
        password: senhaCriptografada,
      });

      await userRepository.save(newUser);

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

  async loginUser(req, res) {
    try {
      const { identificator, password } = req.body;


      if (!identificator || !password) {
        return res.status(400).json({
          success: false,
          message: "Campos obrigatórios não fornecidos",
        });
      }

      const userRepository = AppDataSource.getRepository("User");
      let user;

      // Se contém "@" é um e-mail, senão tenta como CPF
      if (identificator.includes("@")) {
        user = await userRepository.findOneBy({ email: identificator });
      } else {
        user = await userRepository.findOneBy({ cpf: identificator });
      }
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
