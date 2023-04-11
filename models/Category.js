const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

// schema design
const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide category name."],
      trim: true,
      unique: [true, "category name must be unique"],
      lowercase: true,
    },
    products: [
      {
        type: ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
