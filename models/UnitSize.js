const mongoose = require("mongoose");

// schema design
const unitSizeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide unit size name."],
      trim: true,
      unique: [true, "unit size name must be unique"],
      lowercase: true,
    },
    value: {
      type: Number,
      required: [true, "please provide unit size value."],
      trim: true,
      unique: [true, "unit size value must be unique"],
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

const UnitSize = mongoose.model("UnitSize", unitSizeSchema);

module.exports = UnitSize;
