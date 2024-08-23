const mongoose = require("mongoose");
const { Schema } = mongoose;
const plzSchema = new Schema({
  range: { type: Number, required: true },
  fee: { type: Number, required: true },
});

const Plz = mongoose.models.plz || mongoose.model("Plz", plzSchema, "plz");
module.exports = Plz;
