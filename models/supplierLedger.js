const mongoose = require("mongoose");
const validator = require("validator");

// schema design
const supplierLedgerSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide supplier name."],
    trim: true,
    unique: [true, "your supplier name must be unique"],
    lowercase: true,
  },
  address: {
    type: String,
    required: [true, "please provide your supplier address"],
    trim: true,
    lowercase: true,
  },
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
  currentBalance: {
    type: Number,
    required: [true, "please provide current balance"],
    default: 0,
  },
  payments: [
    // {
    //   id: {
    //     type: ObjectId,
    //     required: true,
    //   },
    //   amount: {
    //     type: Number,
    //     required: true,
    //     default: 0,
    //   },
    //   date: {
    //     type: Date,
    //     required: true,
    //   },
    // },
  ],
  credits: [],
});

const SupplierLedger = mongoose.model("SupplierLedger", supplierLedgerSchema);

module.exports = SupplierLedger;
