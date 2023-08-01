import express from "express";
import User from "../model/User";
import authenticateJWT from "../authmiddleware";
import { userLogin, userSignUp } from "../controllers/user-controller";

const userRouter = express.Router();


//SIGNUP
userRouter.post("/signup", userSignUp);


//LOGIN
userRouter.post("/login", authenticateJWT, userLogin);


export default userRouter;
