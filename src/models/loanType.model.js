import mongoose from "mongoose";
import sequence from "mongoose-sequence";

const AutoIncrement = sequence(mongoose);


const loanTypeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    id: {
      type: Number,
      unique: true,
    },
    status: {
      type: String,
      required: true,
      default: "active",
      enum: ["active", "inactive"],
    },
  },
  { timestamps: true }
);

userSchema.plugin(AutoIncrement, { inc_field: "id" });


export const LoanType = mongoose.model("LoanType", loanTypeSchema);
