const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, trim: true, required: true },
    image: { type: String, required: true},
    rol: {
      type: String,
      default: "user",
      enum: ["admin", "user"],
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

UserSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
