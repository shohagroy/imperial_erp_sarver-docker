const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const purchasesSchema = mongoose.Schema(
  {
    supplier: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        required: true,
        ref: "Supplier",
      },
    },
    paymentType: {
      type: String,
      required: [true, "please provide purchase payment type"],
      enum: ["cash", "credit"],
      default: "credit",
    },
    invoiceRef: {
      type: Number,
      required: true,
    },
    invoiceNumber: {
      type: String,
      required: true,
    },
    invoiceDate: {
      type: Date,
      required: true,
    },
    invoiceItems: {
      items: {
        type: Array,
        required: true,
      },
      subtotal: {
        type: Number,
        required: true,
      },
      adjust: {
        type: Number,
        required: true,
      },
      totalAmount: {
        type: Number,
        required: true,
      },
    },
    invoiceAmount: {
      type: Number,
      required: [true, "please provice invoice total number"],
    },
    supplierRef: {
      type: String,
      required: [true, "please provice supplier reference"],
      trim: true,
    },
    createBy: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "User",
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Purchases = mongoose.model("Purchases", purchasesSchema);

module.exports = Purchases;
