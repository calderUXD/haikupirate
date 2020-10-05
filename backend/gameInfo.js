const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameInfoSchema = new Schema(
  {
    addy: String,
    winner: String,
    intro: [{text: [String]}]
  }
);

module.exports = mongoose.model("gameInfo", GameInfoSchema, "gameInfo");
