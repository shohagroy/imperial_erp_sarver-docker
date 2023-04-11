const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

// schema design
const supplierSchema = mongoose.Schema(
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
      enum: ["local", "company", "international"],
      default: "company",
    },

    products: [
      {
        type: ObjectId,
        ref: "Product",
      },
    ],

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

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;
