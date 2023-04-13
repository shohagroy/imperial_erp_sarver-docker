const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

// schema design
const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "please provide staff full name."],
      trim: true,
      unique: [true, "your staff name must be unique"],
      lowercase: true,
    },
    userName: {
      type: String,
      required: [true, "please provide login user name"],
      trim: true,
      unique: [true, "your user name must be unique"],
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      //   validate: {
      //     validator: (value) =>
      //       validator.isStrongPassword(value, {
      //         minLength: 6,
      //         minLowercase: 3,
      //         minNumbers: 1,
      //         minUppercase: 1,
      //         minSymbols: 1,
      //       }),
      //     message: "Password {VALUE} is not strong enough.",
      //   },
    },
    role: {
      type: String,
      enum: ["admin", "seller", "manager"],
      default: "seller",
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

userSchema.pre("save", function (next) {
  const password = this.password;
  const hashedPassword = bcrypt.hashSync(password);

  this.password = hashedPassword;
  next();
});

userSchema.methods.comparePassword = function (password, hash) {
  const isPasswordValid = bcrypt.compareSync(password, hash);
  return isPasswordValid;
};

module.exports = userSchema;
