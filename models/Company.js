const mongoose = require("mongoose");
const validator = require("validator");

// schema design
const companySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide a name for your company."],
      trim: true,
      unique: [true, "your company name must be unique"],
      lowercase: true,
    },
    address: {
      type: String,
      required: [true, "please provide your company address"],
      trim: true,
      lowercase: true,
    },
    contact: {
      type: String,
      //   required: [true, "Please provide  a contact number"],
      validate: {
        validator: (value) => {
          return validator.isMobilePhone(value);
        },
        message: "Please provide a valid phone number",
      },
    },

    emergencyContact: {
      type: String,
      required: [true, "Please provide  a emergency contact number"],
      validate: {
        validator: (value) => {
          return validator.isMobilePhone(value);
        },
        message: "Please provide a valid phone number",
      },
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Provide a valid Email"],
      trim: true,
      lowercase: true,
      unique: true,
    },
    logo: [
      {
        type: String,
        required: true,
        validate: [validator.isURL, "wrong url"],
      },
    ],
    status: {
      type: String,
      default: "active",
      enum: ["active", "inactive"],
    },
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
