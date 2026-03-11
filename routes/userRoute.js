import express from "express";
import { getUsers,addUser, addUserForm,editUserForm,deleteUser,saveUser} from "../controllers/userController.js";
const userRouter = express.Router();
userRouter.get("/",getUsers);
userRouter.get("/add",addUserForm);
userRouter.post("/add",addUser);
userRouter.get("/:id/edit",editUserForm);
userRouter.get("/:id/delete",deleteUser);
userRouter.post("/:id/save",saveUser);

export default userRouter