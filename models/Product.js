const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

// schema design
const productSchema = mongoose.Schema(
  {
    code: {
      type: String,
      required: [true, "Please provide product code."],
      trim: true,
      unique: [true, "code must be unique"],
      lowercase: true,
      minLength: [3, "code must be at least 5 characters."],
      maxLenght: [20, "code is too large"],
    },
    name: {
      type: String,
      required: [true, "Please provide product name."],
      trim: true,
      unique: [true, "name must be unique"],
      lowercase: true,
      minLength: [10, "Name must be at least 10 characters."],
      maxLenght: [50, "Name is too large"],
    },
    description: {
      type: String,
    },
    category: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "Category",
        required: true,
      },
    },
    unit: {
      type: String,
      required: [true, "Please provide product unit."],
    },
    packSize: {
      type: Number,
      required: [true, "Please provide product pack size."],
      trim: true,
      default: 0,
      min: 0,
    },
    unitSize: {
      type: Number,
      required: [true, "Please provide product pack size."],
      trim: true,
      default: 0,
      min: 0,
    },
    price: {
      type: Number,
      required: [true, "Please provide product purchase price."],
      trim: true,
      default: 0,
      min: 0,
    },

    imageURLs: String,
    suppliedBy: {
      name: {
        type: String,
        trim: true,
        required: [true, "Please provide a supplier name"],
      },
      id: {
        type: ObjectId,
        ref: "Supplier",
      },
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

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
