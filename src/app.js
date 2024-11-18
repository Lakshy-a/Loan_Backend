import express from "express";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import bodyParser from "body-parser";
import loanRoutes from "./routes/userLoan.routes.js"

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.use("/api/userAuth", userRoutes);
app.use("/api/loan", loanRoutes);

export { app };
