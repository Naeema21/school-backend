const mongoose = require("mongoose");

// Define the Mongoose schema
const registerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // Unique identifier field
  username: { type: String },
  password: { type: String },
  first_name: { type: String, required: true },
  middle_name: { type: String, required: false },
  last_name: { type: String, required: true },
  academic_year: { type: String, required: true },
  admission_class: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: String, required: true },
  about_school: { type: String, required: false },
  primary_contact_name: { type: String, required: true },
  primary_contact_relation: { type: String, required: true },
  primary_contact_number: { type: String, required: true },
  primary_email_id: { type: String, required: true },
  secondary_contact_number: { type: String, required: false },
  address_1: { type: String, required: true },
  address_2: { type: String, required: false },
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  pin_code: { type: String, required: true },
});

// Check if the model already exists before creating it
const Admission = mongoose.models.Admission || mongoose.model("Admission", registerSchema);


module.exports = Admission;
