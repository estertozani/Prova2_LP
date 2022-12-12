const mongoose = require("mongoose");

const TeamModel = mongoose.model("Team", {
  name: String,
  codigoIso: String,
  nomeTec: String,
  copasGanhas: Number,
  bandeira: String
});

module.exports = TeamModel;