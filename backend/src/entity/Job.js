
const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Job",
  tableName: "jobs",
  columns: {
    id: { primary: true, type: "int", generated: true },
    titulo: { type: "varchar", length: 100, nullable: false },
    descricao: { type: "text", nullable: false},
    requisitos: { type: "text", nullable: true },
    localizacao: { type: "varchar", length: 100, nullable: true },
    tipoContrato: { type: "enum", enum: ["CLT", "PJ", "Freelancer", "Estágio"], nullable: true  },
    salario: { type: "decimal", precision: 10, scale: 2, nullable: true },
    dataPublicacao: { type: "datetime", default: () => "CURRENT_TIMESTAMP"}
  }, relations: {
    user: {
      type: "many-to-one",
      target: "User",
      inverseSide: "jobs",
      joinColumn: { name: "userId" }
    },
    company: {
      type: "many-to-one",
      target: "Company",
      inverseSide: "jobs"
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