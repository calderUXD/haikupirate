const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CodesSchema = new Schema(
  {
    name: String,
    code: String
  }
);

module.exports = mongoose.model("Codes", CodesSchema);
