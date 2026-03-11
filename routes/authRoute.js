import express from "express";
import { login,validateUser,register,registerUser,logout } from "../controllers/authController.js";
const authRouter = express.Router();

authRouter.get("/login",login);
authRouter.post("/login",validateUser);
authRouter.get("/register",register);
authRouter.post("/register",registerUser);
authRouter.get("/logout",logout);

export default authRouter;