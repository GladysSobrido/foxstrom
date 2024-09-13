const mongoose = require("mongoose");
const { Schema } = mongoose;
const customerSchema = new Schema({
  clerkUserId: { type: String, required: true, unique: true },
  tarif: { type: String },
  price: { type: String },
  vorname: { type: String },
  nachname: { type: String },
  strasse: { type: String },
  hausnummer: { type: String },
  postleitzahl: { type: String },
  ort: { type: String },
  email: { type: String },
});

const Customer =
  mongoose.models.Customer ||
  mongoose.model("Customer", customerSchema, "customers");
module.exports = Customer;
