const mongoose = require("mongoose");

// schema design
const unitSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide unit name."],
      trim: true,
      unique: [true, "unit name must be unique"],
      lowercase: true,
    },
    value: {
      type: String,
      required: [true, "please provide unit value name."],
      trim: true,
      unique: [true, "unit name must be unique"],
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

const Unit = mongoose.model("Unit", unitSchema);

module.exports = Unit;
