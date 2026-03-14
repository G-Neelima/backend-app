// import userModel from "../models/userModel.js";
// import bcrypt from "bcrypt";

// const getUsers= async (req,res) => {
//     const users= await userModel.find();
//     res.render("users/index",{users});
// };
// const addUser = async (req,res) =>{
//     const user= req.body;
//     const hashedPassword = await bcrypt.hash(user.password, 10);
//     user.password = hashedPassword;
//     await userModel.create(user);
//     res.redirect("/users")
// };
// const addUserForm= async (req,res)=>{
//     res.render("users/add");
// }
// const editUserForm= async (req,res)=>{
//     const id=req.params.id;
//     const user =  await userModel.findOne({_id: id});
//     res.render("users/edit",{user});
    
// }
// const saveUser= async (req,res)=>{
//     const id = req.params.id;
//     await userModel.findByIdAndUpdate(id,req.body);
//     res.redirect("/users")

// }
// const deleteUser=async (req,res)=>{
//     const id=req.params.id;
//     await userModel.findByIdAndDelete(id);
//     res.redirect("/users");
// }

// export {getUsers, addUser, addUserForm,editUserForm,saveUser,deleteUser};



import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
const getusers = async (req, res) => {
  const users = await userModel.find();
  res.render("users/index", { users });
};

const adduser = async (req, res) => {
  const body = req.body;
  const hashedPassword = await bcrypt.hash(body.password, 10);
  body.password = hashedPassword;
  await userModel.create(body);
  res.redirect("/users");
};

const adduserForm = async (req, res) => {
  res.render("users/add");
};

const deleteuser = async (req, res) => {
  const id = req.params.id;
  await userModel.findByIdAndDelete(id);
  res.redirect("/users");
};

const edituserForm = async (req, res) => {
  const id = req.params.id;
  const user = await userModel.findOne({ _id: id });
  res.render("users/edit", { user });
};

const saveuser = async (req, res) => {
  const id = req.params.id;
  await userModel.findByIdAndUpdate(id, req.body);
  res.redirect("/users")
};

export {
  getusers,
  adduser,
  adduserForm,
  deleteuser,
  edituserForm,
  saveuser
};