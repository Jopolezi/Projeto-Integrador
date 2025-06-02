
const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Company",
  tableName: "companies",
  columns: {
    id: { primary: true, type: "int", generated: true },
    cnpj: { type: "varchar", length: 18, unique: true },
    nome_empresa: { type: "varchar", length: 150 },
    telefone: { type: "varchar", length: 20, nullable: true },
    foto_perfil_empresa: { type: "varchar", length: 255, nullable: true },
    email: { type: "varchar", length: 100, nullable: true },
    endereco: { type: "varchar", length: 255, nullable: true },
    created_at: { type: "datetime", createDate: true }
  },
  relations: {
    user: {
      type: "one-to-one",
      target: "User",
      joinColumn: true,
      nullable: false
    },
    jobs: {
      type: "one-to-many",
      target: "Job",
      inverseSide: "company"
    }
  }
});
