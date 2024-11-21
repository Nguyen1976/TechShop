const mongoose = require("mongoose");

const AddressModel = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String },
  city: { type: String, required: true },
  district: { type: String, required: true },
  commune: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String },
  default: { type: Boolean, required: true, default: false },
});

const Address = mongoose.model("Address", AddressModel);

module.exports = Address;
