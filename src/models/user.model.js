import mongoose from "mongoose";
import sequence from "mongoose-sequence";
import bcrypt from "bcryptjs";

const AutoIncrement = sequence(mongoose);

const userSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      match: /^[0-9]{10,15}$/,
    },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zipCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    status: {
      type: String,
      default: "active",
      enum: ["active", "inactive"],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    loanDetails: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "LoanDetails",
      },
    ],
    refreshToken: {
      type: String,
      default: " ",
    },
  },
  { timestamps: true }
);

userSchema.plugin(AutoIncrement, { inc_field: "id" });

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export const User = mongoose.model("User", userSchema);
