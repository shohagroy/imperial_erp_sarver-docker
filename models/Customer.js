const mongoose = require("mongoose");
const validator = require("validator");

// schema design
const customerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide staff full name."],
      trim: true,
      unique: [true, "your staff name must be unique"],
      lowercase: true,
    },
    address: {
      type: String,
      required: [true, "please provide your staff address"],
      trim: true,
      lowercase: true,
    },
    contact: {
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
    whatapp: {
      type: String,
      required: [true, "Please provide  a emergency contact number"],
      validate: {
        validator: (value) => {
          return validator.isMobilePhone(value);
        },
        message: "Please provide a valid phone number",
      },
    },
    type: {
      type: String,
      enum: ["general", "wholesale"],
      default: "general",
    },
    currentAmount: {
      type: Number,
      default: 0,
    },
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

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
