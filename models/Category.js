const mongoose = require("mongoose");

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
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
