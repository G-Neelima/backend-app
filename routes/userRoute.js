// import express from "express";
// import { getUsers,addUser, addUserForm,editUserForm,deleteUser,saveUser} from "../controllers/userController.js";
// const userRouter = express.Router();
// userRouter.get("/",getUsers);
// userRouter.get("/add",addUserForm);
// userRouter.post("/add",addUser);
// userRouter.get("/:id/edit",editUserForm);
// userRouter.get("/:id/delete",deleteUser);
// userRouter.post("/:id/save",saveUser);

// export default userRouter


import {
  getusers,
  adduserForm,
  adduser,
  deleteuser,
  edituserForm,
  saveuser,
} from "../controllers/userController.js";
import express from "express";
const userRouter = express.Router();

userRouter.get("/", getusers);
userRouter.get("/add", adduserForm);
userRouter.post("/add", adduser);
userRouter.get("/:id/delete", deleteuser);
userRouter.get("/:id/edit", edituserForm);
userRouter.post("/:id/save", saveuser);

export default userRouter;