const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

// schema design
const supplierSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "please provide supplier full name."],
      trim: true,
      unique: [true, "your supplier name must be unique"],
      lowercase: true,
    },
    sortName: {
      type: String,
      required: [true, "please provide supplier sort name."],
      trim: true,
      unique: [true, "your supplier sort name must be unique"],
      lowercase: true,
    },
    address: {
      type: String,
      required: [true, "please provide your supplier address"],
      trim: true,
      lowercase: true,
    },
    website: String,
    contact: {
      type: String,
      required: [true, "Please provide a contact number"],
      validate: {
        validator: (value) => {
          return validator.isMobilePhone(value);
        },
        message: "Please provide a valid phone number",
      },
    },
    email: String,
    whatapp: String,
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
    ledger: {
      type: ObjectId,
      ref: "SupplierLedger",
    },
    type: {
      type: String,
      default: "company",
      enum: ["company", "local"],
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
