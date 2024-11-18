import { Loan } from "../../models/loan.model.js";

const applyLoan = (req, res) => {
  try {
    res.status(200).json({ message: "Applied for loan successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error applying for loan" });
  }
};

export default applyLoan;
