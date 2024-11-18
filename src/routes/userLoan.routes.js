import express from "express";
import applyLoan from "../controllers/userLoan/applyLoan.controller.js";

const router = express.Router();

router.post("/applyLoan", applyLoan);

export default router;
