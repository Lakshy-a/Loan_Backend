import express from "express";
import { forgotPasswordFrontend } from "../controllers/userFrontend/forgotPasswordFrontend.controller.js";
import { registerFrontend } from "../controllers/userFrontend/registerFrontend.controller.js";
import { loginFrontend } from "../controllers/userFrontend/loginFrontend.controller.js";
import logout from "../controllers/userFrontend/logout.controller.js";

const router = express.Router();

router.post("/register", registerFrontend);
router.post("/login", loginFrontend);
router.post("/forgotPassword", forgotPasswordFrontend);
router.get("/logout", logout);

export default router;
