const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CodesSchema2 = new Schema(
  {
    name: String,
    code: String,
    email: String,
    message: String
  }
);


module.exports = mongoose.model("codes2", CodesSchema2, "codes2");

