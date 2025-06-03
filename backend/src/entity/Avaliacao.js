
const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Avaliacao",
  tableName: "avaliacoes",
  columns: {
    id: { primary: true, type: "int", generated: true },
    nota: { type: "int", nullable: false },
    comentario: { type: "text", nullable: true },
    origem: { type: "enum", enum: ["usuario_para_empresa", "empresa_para_usuario", "usuario_para_usuario"], nullable: false },
    data: { type: "datetime", createDate: true }
  },
  relations: {
    avaliador: { type: "many-to-one", target: "User", joinColumn: true, nullable: false },
    avaliado: { type: "many-to-one", target: "User", joinColumn: true, nullable: false },
    vaga: { type: "many-to-one", target: "Job", joinColumn: true, nullable: true }
  }
});
