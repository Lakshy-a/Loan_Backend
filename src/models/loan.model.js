import mongoose from "mongoose";
import sequence from "mongoose-sequence";

const AutoIncrement = sequence(mongoose);

const loanSchema = mongoose.Schema(
  {
    id: {
      type: Number,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    loanType: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "LoanType",
      },
    ],
    loanAmount: {
      type: Number,
    },
    loanDuration: {
      type: Number,
    },
    loanInterestRate: {
      type: Number,
    },
    loanStatus: {
      type: String,
      enum: ["requested", "approved", "rejected"],
      default: "requested",
    },
    loanStartDate: {
      type: Date,
    },
    loanEndDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

userSchema.plugin(AutoIncrement, { inc_field: "id" });

export const Loan = mongoose.model("LoanDetails", loanSchema);
