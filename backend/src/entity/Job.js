const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Job",
  tableName: "jobs",
  columns: {
    id: { primary: true, type: "int", generated: true },
    titulo: { type: "varchar", length: 100 },
    descricao: { type: "text" },
    requisitos: { type: "text", nullable: true },
    localizacao: { type: "varchar", length: 100, nullable: true },
    tipo_contrato: {
      type: "enum",
      enum: ["CLT", "PJ", "Freelancer", "EstÃ¡gio"],
      nullable: true
    },
    salario: { type: "decimal", precision: 10, scale: 2, nullable: true },
    data_publicacao: { type: "datetime", default: () => "CURRENT_TIMESTAMP" }
  },
  relations: {
    user: {
      type: "many-to-one",
      target: "User",
      inverseSide: "jobs",
      joinColumn: { name: "user_id" }
    },
    applications: {
      type: "one-to-many",
      target: "Application",
      inverseSide: "vaga"
    },
    avaliacoes: {
      type: "one-to-many",
      target: "Avaliacao",
      inverseSide: "vaga"
    }
  }
});