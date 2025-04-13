const connection = require("../config/db"); // Importando a conexão com o banco
const { generateToken } = require("../middlewares/authMiddleware"); // Função para gerar o JWT
const bcrypt = require("bcrypt"); // Para comparar senha com hash

class userController {
  // Método para criar usuário
  async criarUser(req, res) {
    try {
      const { name, sobrenome, email, cpf, telefone, password } = req.body;
  
      if (!name|| !sobrenome || !email || !cpf || !telefone || !password) {
        return res.status(400).json({
          success: false,
          message: "Campos obrigatórios não fornecidos",
        });
      }
  
      const saltRounds = 10;
      const senhaCriptografada = await bcrypt.hash(password, saltRounds);
      const nomeCompleto = `${name} ${sobrenome}`;
  
      // Atualizar a query para incluir o telefone
      const query = "INSERT INTO users (name, email, cpf, telefone, password) VALUES (?, ?, ?, ?, ?)";
  
      connection.query(query, [nomeCompleto, email, cpf, telefone, senhaCriptografada], (err, results) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: "Erro ao salvar usuário",
            error: err.message,
          });
        }
  
        return res.status(201).json({
          success: true,
          message: "Usuário cadastrado com sucesso!",
        });
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro interno no servidor",
        error: error.message,
      });
    }
  }

  // Método para logar usuário
  logarUser(req, res) {
    try {
      const { email, cpf, cnpj, password } = req.body;

      if (!(email || cpf || cnpj) || !password) {
        return res.status(400).json({
          success: false,
          message: "Campos obrigatórios não fornecidos",
        });
      }

      let query = "SELECT * FROM users WHERE ";
      let queryParams = [];
      let conditions = [];

      if (email) {
        conditions.push("email = ?");
        queryParams.push(email);
      }
      if (cpf) {
        conditions.push("cpf = ?");
        queryParams.push(cpf);
      }
      if (cnpj) {
        conditions.push("cnpj = ?");
        queryParams.push(cnpj);
      }

      query += conditions.join(" OR "); // Corrige a concatenação da query

      connection.query(query, queryParams, async (err, results) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: "Erro ao consultar banco de dados",
            error: err.message,
          });
        }

        if (results.length === 0) {
          return res
            .status(400)
            .json({ success: false, message: "Usuário não encontrado" });
        }

        const user = results[0];

        // Comparar senha com hash
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res
            .status(401)
            .json({ success: false, message: "Senha incorreta" });
        }

        // Gerar token JWT
        const token = generateToken(user);

        res.status(200).json({
          success: true,
          message: "Login bem-sucedido!",
          token,
        });
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
