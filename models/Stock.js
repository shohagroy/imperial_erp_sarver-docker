const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
// schema design

const stockSchema = mongoose.Schema({
  product: {
    code: {
      type: String,
      trim: true,
      required: [true, "Please provide a product code"],
      lowercase: true,
    },
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide a product name"],
      lowercase: true,
    },
    id: {
      type: ObjectId,
      required: true,
      ref: "Product",
    },
  },
  quantity: {
    type: Number,
    trim: true,
    required: [true, "please provide product quantity"],
    default: 0,
    min: 0,
  },

  available: {
    type: Number,
    trim: true,
    required: [true, "please provide product quantity"],
    default: 0,
    min: 0,
  },

  status: {
    type: String,
    required: true,
    enum: {
      values: ["in-stock", "low-stock", "out-of-stock", "discontinued"],
      message: " status can't be {VALUE} ",
    },
  },
});

stockSchema.pre("save", function (next) {
  //this ->
  //   console.log(" Before saving data");
  if (this.quantity == 0) {
    this.status = "out-of-stock";
    (this.quantity = 0), (this.available = 0);
  }

  next();
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
