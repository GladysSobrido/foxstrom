const mongoose = require("mongoose");
const { Schema } = mongoose;
const verbrauchSchema = new Schema({
  group: { type: Number, required: true },
  basepreis: { type: Number, required: true },
});

const Verbrauch =
  mongoose.models.verbrauch ||
  mongoose.model("Verbrauch", verbrauchSchema, "verbrauch");
module.exports = Verbrauch;
