const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Avaliacao",
  tableName: "avaliacoes",
  columns: {
    id: { primary: true, type: "int", generated: true },
    nota: { type: "int", nullable: false },
    comentario: { type: "text", nullable: true },
    data: { type: "datetime", createDate: true }
  },
  relations: {
    avaliador: {
      type: "many-to-one",
      target: "User",
      joinColumn: { name: "avaliador_id" },
      nullable: false
    },
    avaliado: {
      type: "many-to-one",
      target: "User",
      joinColumn: { name: "avaliado_id" },
      nullable: false
    },
    vaga: {
      type: "many-to-one",
      target: "Job",
      joinColumn: { name: "vaga_id" },
      nullable: true
    }
  }
});