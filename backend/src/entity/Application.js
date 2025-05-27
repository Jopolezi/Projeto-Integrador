
const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Application",
  tableName: "applications",
  columns: {
    id: { primary: true, type: "int", generated: true },
    data_candidatura: { type: "datetime", createDate: true }
  },
  relations: {
    vaga: {
      type: "many-to-one",
      target: "Job",
      inverseSide: "applications"
    },
    usuario: {
      type: "many-to-one",
      target: "User",
      inverseSide: "applications"
    }
  }
});
