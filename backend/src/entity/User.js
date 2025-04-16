const { EntitySchema } = require('typeorm');

// Define a entidade "User"
module.exports = new EntitySchema({
  name: 'User', // nome da entidade
  tableName: 'users', // nome da tabela no banco
  columns: {
    id: {
        primary: true, // Defina a chave primária
        type: "int", // Tipo de dado inteiro
        generated: true, // Gerar automaticamente
      },
      name: {
        type: "varchar",
        length: 50, // Definindo o tamanho do campo de nome
        nullable: true, // Permite que o campo seja nulo
      },
      password: {
        type: "varchar",
        length: 255, // O tamanho adequado para armazenar senhas criptografadas
        nullable: true, // Permite que o campo seja nulo (caso o usuário não tenha senha)
      },
      email: {
        type: "varchar",
        unique: true, // Garante que o e-mail seja único
        nullable: false, // O e-mail é obrigatório
      },
      cpf: {
        type: "varchar",
        length: 45, // Comprimento adequado para CPF
        nullable: true, // Permite CPF nulo
        unique: true, // Garantir que o CPF seja único
      },
      cnpj: {
        type: "varchar",
        length: 45, // Comprimento adequado para CNPJ
        nullable: true, // Permite CNPJ nulo
        unique: true, // Garante que o CNPJ seja único
      },
      telefone: {
        type: "varchar",
        length: 45, // Comprimento adequado para telefone
        nullable: true, // Permite telefone nulo
      },
      NumeroPica: {
        type: "varchar",
        length: 45, // Comprimento adequado para telefone
        nullable: true, // Permite telefone nulo
      },
    },
  });