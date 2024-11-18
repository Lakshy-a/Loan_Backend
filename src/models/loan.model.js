import mongoose from "mongoose";
import sequence from "mongoose-sequence";

const AutoIncrement = sequence(mongoose);

const loanSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    loanType: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "LoanType",
        required: true,
      },
    ],
    loanAmount: {
      type: Number,
      required: true,
    },
    loanDuration: {
      type: Number,
      required: true,
    },
    loanInterestRate: {
      type: Number,
      required: true,
    },
    loanStatus: {
      type: String,
      enum: ["requested", "approved", "rejected", "disbursed", "closed"],
      default: "requested",
    },
    loanStartDate: {
      type: Date,
      required: true,
    },
    loanEndDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (v) {
          return v > this.loanStartDate;
        },
        message: "loanEndDate should be after loanStartDate",
      },
    },
  },
  { timestamps: true }
);

// Apply auto-increment plugin with a unique counter ID
loanSchema.plugin(AutoIncrement, { inc_field: "id", id: "LoanDetailsId", start_seq: 1 });

export const Loan = mongoose.model("LoanDetails", loanSchema);
